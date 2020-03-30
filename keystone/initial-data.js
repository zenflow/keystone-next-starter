const crypto = require('crypto');
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async keystone => {
  const { data: { _allUsersMeta: { count: existingUserCount } } } = await keystone.executeQuery(`{ _allUsersMeta { count } }`);

  if (existingUserCount === 0) {
    const username = 'admin';
    const password = 'password'

    await keystone.executeQuery(
      `mutation ($username: String, $password: String) {
        createUser(data: {username: $username, password: $password, isAdmin: true}) {
          id
        }
      }`,
      {
        variables: { username, password }
      }
    );

    console.log(`

User created:
  username: ${username}
  password: ${password}
Please change password after initial login.
`);
  }
};
