const {GraphQLApp} = require('@keystonejs/app-graphql');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {NextApp} = require('@keystonejs/app-next');

function createApps (keystone) {
  const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
    config: {
      identityField: 'email',
      secretField: 'password',
    },
  });

  return [
    new GraphQLApp(),
    new AdminUIApp({authStrategy}),
    new NextApp({dir: 'next'})
  ];
}

module.exports = {createApps};
