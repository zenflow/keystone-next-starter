const crypto = require('crypto');
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async keystone => {
  const { data: { _allUsersMeta: { count: existingUserCount } } } = await keystone.executeQuery(`{ _allUsersMeta { count } }`);

  if (existingUserCount === 0) {
    const email = 'admin@keystonejs.com';
    const password = 'password'

    await keystone.executeQuery(
      `mutation ($email: String, $password: String) {
        createUser(data: {email: $email, password: $password, isAdmin: true}) {
          id
        }
      }`,
      {
        variables: { email, password }
      }
    );

    console.log(`

User created:
  email: ${email}
  password: ${password}
Please change password after initial login.
`);
  }
};
