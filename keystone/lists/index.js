const users = require('./users')

const createLists = keystone => {
  users(keystone)
}

module.exports = {createLists};
