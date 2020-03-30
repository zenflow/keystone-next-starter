import Head from 'next/head'
import pkg from '../../package'

export async function getServerSideProps ({req: {keystone, user = null}}) {
  // This call is not subject to access control rules
  const {data: {allUsers}} = await keystone.executeQuery('{allUsers {username isAdmin bio}}')
  return {props: {user, allUsers}}
}

const Home = ({allUsers, user}) => (
  <div className="container">
    <Head>
      <title>keystone-next-starter</title>
    </Head>

    <main>
      <h1 className="title">
        keystone-next-starter
      </h1>

      <p className="version">
        <code>v{pkg.version}</code>
      </p>

      <div className="grid">
        <a href="/admin" className="card">
          <h3>Admin UI &rarr;</h3>
          <p>View and edit data in the admin section of the site.</p>
        </a>
        <a href={pkg.repository.url} className="card">
          <h3>Code &rarr;</h3>
          <p>View and edit this project's code on Github.</p>
        </a>
      </div>

      <h3>Your user</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h3>All users</h3>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 3rem;
      }

      .title,
      .version {
        text-align: center;
      }

      .version {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;

        min-width: 300px;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
