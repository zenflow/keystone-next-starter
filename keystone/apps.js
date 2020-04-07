const {GraphQLApp} = require('@keystonejs/app-graphql');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {GoogleAuthStrategy} = require('@keystonejs/auth-passport');
const {NextApp} = require('@keystonejs/app-next');

function createApps (keystone) {

  /*
  const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
    config: {
      identityField: 'email',
      secretField: 'password',
    },
  });

  */
  const authStrategy = keystone.createAuthStrategy({
    type: GoogleAuthStrategy,
    list: 'User',
    config: {
      idField: 'googleId',
      appId: process.env.GOOGLE_CLIENT_ID,
      appSecret: process.env.GOOGLE_CLIENT_SECRET,
      loginPath: '/auth/google',
      callbackPath: '/auth/google/callback',
      resolveState: req => req.query.redirect,
      resolveCreateData: ({ createData, serviceProfile }) => {
        const { displayName, emails: [{ value: email = '' } = {}] = [] } = serviceProfile;
        createData.email = createData.email || email;
        createData.name = createData.name || displayName;
        return createData;
      },
      onAuthenticated: ({ token, item, isNewItem }, req, res) => {
        const redirect = req.query.state;
        console.log('req.query', req.query);
        res.redirect(redirect || '/');
      },
      onError: (error, req, res) => {
        console.error(error);
        res.redirect('/?error=Uh-oh');
      },
    },
  });

  return [
    new GraphQLApp(),
    new AdminUIApp({authStrategy}),
    new NextApp({dir: 'next'})
  ];
}

module.exports = {createApps};
