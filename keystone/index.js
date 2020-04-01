const {createKeystone} = require('./keystone')
const {createLists} = require('./lists')
const {createApps} = require('./apps')
const {createConfigureExpress} = require('./configureExpress')

const keystone = createKeystone()
createLists(keystone)
const apps = createApps(keystone)
const configureExpress = createConfigureExpress(keystone)

module.exports = {keystone, apps, configureExpress}
