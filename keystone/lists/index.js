const users = require('./users')

function createLists (keystone) {
  users(keystone)
}

module.exports = {createLists};
