require('dotenv').config()

const {promisify} = require('util')
const express = require('express')
const {keystone, apps, configureExpress} = require('./keystone/index')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const distDir = 'dist'

function combineMiddlewares(middlewares) {
  let result = middlewares[0]
  middlewares.slice(1).forEach(b => {
    const a = result
    result = (req, res, next) => {
      a(req, res, error => {
        if (error) {
          return next(err)
        }
        b(req, res, next)
      })
    }
  })
  return result
}

function crashIfThrows (promise) {
  return promise.catch(error => {
    console.error(error);
    process.exit(1);
  })
}

console.log('Starting server...');

const middlewarePromise = (async () => {
  const {middlewares} = await keystone.prepare({apps, dev, distDir});
  await keystone.connect();
  return combineMiddlewares(middlewares)
})()

const app = express();
app.use(async (req, res, next) => {
  const middleware = await middlewarePromise
  middleware(req, res, next)
})
configureExpress(app);

module.exports = app

if (require.main === module) {
  crashIfThrows((async () => {
    await promisify(app.listen.bind(app))(port)
    console.log(`Listening at http://localhost:${port}`);
  })());
}
