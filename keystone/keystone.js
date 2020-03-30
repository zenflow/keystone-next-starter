const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const initialiseData = require('./initial-data')
const {createLists} = require('./lists/index')
const pkg = require('../package')

const keystone = new Keystone({
  name: 'keystone-next-starter',
  appVersion: pkg.version,
  secureCookies: process.env.DISABLE_SECURE_COOKIES !== 'true',
  cookieSecret: process.env.COOKIE_SECRET || 'qwerty',
  // sessionStore: // TODO use persistent store
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
})

createLists(keystone);

module.exports = {keystone};
