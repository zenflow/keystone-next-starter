const { Text, Checkbox, Password } = require('@keystonejs/fields');
const access = require('../access')
const {getPlugins} = require('../plugins')

module.exports = keystone => {
  keystone.createList('User', {
    plugins: getPlugins(),
    access: {
      read: true,
      update: access.userIsAdminOrItem,
      create: access.userIsAdmin,
      delete: access.userIsAdmin,
    },
    labelField: 'username',
    fields: {
      username: {
        type: Text,
        isUnique: true,
        isRequired: true,
        access: {
          update: false
        }
      },
      password: {
        type: Password,
      },
      isAdmin: {
        type: Checkbox,
        defaultValue: false,
        access: {
          update: access.userIsAdmin,
        },
      },
      bio: {
        type: Text,
      },
    },
    adminConfig: {
      defaultColumns: 'username,isAdmin,bio',
      defaultSort: 'username',
    },
  });
}
