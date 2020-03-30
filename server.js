require('dotenv').config()

const {promisify} = require('util')
const express = require('express')
const {keystone, apps} = require('./keystone/index')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const distDir = 'dist'

async function main () {
  console.log('Starting server...')
  const {middlewares} = await keystone.prepare({apps, dev, distDir})
  await keystone.connect();
  const app = express();
  app.use((req, res, next) => {
    req.keystone = keystone
    next()
  });
  app.use(middlewares);
  await promisify(app.listen.bind(app))(port)
  console.log(`Listening at http://localhost:${port}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
