const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy  } = require('@keystonejs/auth-password');
const { NextApp } = require('@keystonejs/app-next');
const {keystone} = require('./keystone')

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'username',
    secretField: 'password',
  },
});

const apps = [
  new GraphQLApp(),
  new AdminUIApp({authStrategy}),
  new NextApp({dir: 'next'})
];

module.exports = {apps};
