import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import ssrPrepass from '@zen_flow/react-ssr-prepass'
import { client, createClient } from '../gqless'

/**
 * React hook to access the gqless client from context.
 * It's necessary to use this in order for SSR to work properly,
 * because on the server, every request should get it's own gqless client.
 * @returns {{client, query}}
 */
export const useGqless = () => {
  const client = React.useContext(GqlessContext)
  const {query} = client
  return {client, query}
}
export const GqlessContext = React.createContext(client);

let globalClient = null

const getClient = (initialState, requestCookie = null) => {
  const withInitialState = client => {
    client.cache.merge(client.accessor, initialState)
    return client
  }
  if (typeof window === 'undefined') {
    return withInitialState(createClient({requestCookie}))
  }
  if (!globalClient) {
    globalClient = withInitialState(client)
  }
  return globalClient
}

const didActionTakeTime = action => {
  const actionPromise = action()
  const resultPromise = Promise.race([
    actionPromise.then(() => false),
    Promise.resolve().then(() => true),
  ])
  return actionPromise.then(() => resultPromise)
}

/**
 * Creates a withGqless HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withGqlessOptions
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */
export const withGqless = ({} = {}) => PageComponent => {
  const WithGqless = ({gqlessClient, gqlessState, ...pageProps}) => {
    const client = gqlessClient || getClient(gqlessState)
    return (
      <GqlessContext.Provider value={client}>
        <PageComponent {...pageProps} />
      </GqlessContext.Provider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component'
    WithGqless.displayName = `withGqless(${displayName})`
  }

  WithGqless.getInitialProps = async ctx => {
    // Get the client to use
    const gqlessClient = getClient({}, ctx.req?.headers.cookie)

    // Install the client on NextPageContext
    const inAppContext = Boolean(ctx.ctx)
    ctx.gqlessClient = gqlessClient
    if (inAppContext) {
      ctx.ctx.gqlessClient = gqlessClient
    }

    // Run wrapped getInitialProps methods
    let pageProps = {}
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx)
    } else if (inAppContext) {
      pageProps = await App.getInitialProps(ctx)
    }

    // When redirecting, the response is finished.
    // No point in continuing to render
    if (ctx.res && ctx.res.finished) {
      return pageProps
    }

    // Prefetch & serialize data if on the server
    if (!process.browser) {
      const {AppTree} = ctx

      // Since AppComponents and PageComponents have different context types
      // we need to modify their props a little.
      let props
      if (inAppContext) {
        props = { ...pageProps, gqlessClient }
      } else {
        props = { pageProps: { ...pageProps, gqlessClient } }
      }

      const tree = <AppTree {...props}/>
      try {
        let passes = 0
        while (true) {
          const tookTime = await didActionTakeTime(() => ssrPrepass(tree))
          if (!tookTime) {
            break;
          }
          if (++passes === 10) {
            throw new Error('App tree still renders async after prepassing 10 times')
          }
        }
      } catch (error) {
        // Prevent errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        console.error('Error while prefetching data', error)
      }

      // ssrPrepass does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()

      // Dispose of client after rendering is done
      setTimeout(() => gqlessClient.dispose(), 1000)

      // We send gqlessClient as a prop to the component to avoid calling getClient() twice on the server,
      //   which would create and use two different clients, which would be bad.
      // The following code will make sure we send gqlessClient as `null` to the browser.
      gqlessClient.toJSON = () => null
      // We also send gqlessState as a prop to the component, so that when it renders on the browser,
      //   the gqless client can be initialized with the required data.
      const gqlessState = gqlessClient.cache.rootValue.toJSON()
      return {...pageProps, gqlessState, gqlessClient}
    }

    return pageProps
  }

  return WithGqless
}
