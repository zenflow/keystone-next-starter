const {Keystone} = require('@keystonejs/keystone');
const {MongooseAdapter} = require('@keystonejs/adapter-mongoose');
const initialiseData = require('./initial-data')
const pkg = require('../package')

function createKeystone () {
  return new Keystone({
    name: 'keystone-next-starter',
    appVersion: pkg.version,
    cookieSecret: process.env.COOKIE_SECRET || 'qwerty',
    // sessionStore: // TODO use persistent store
    adapter: new MongooseAdapter(),
    onConnect: initialiseData,
  })
}

module.exports = {createKeystone};
