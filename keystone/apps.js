const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy  } = require('@keystonejs/auth-password');
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
  new AdminUIApp({
    enableDefaultRoute: true,
    authStrategy,
  }),
];

module.exports = {apps};
