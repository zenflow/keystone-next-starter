const { Text, Checkbox, Password } = require('@keystonejs/fields');
const access = require('../access')
const {getPlugins} = require('../plugins')

module.exports = keystone => {
  keystone.createList('User', {
    plugins: getPlugins(),
    access: {
      create: access.userIsAdmin,
      read: true,
      update: access.userIsAdminOrItem,
      delete: access.userIsAdmin,
    },
    labelField: 'email',
    fields: {
      email: {
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
        defaultValue: '',
      },
    },
    adminConfig: {
      defaultColumns: 'email,isAdmin,bio,createdAt,createdBy',
      defaultSort: 'email',
    },
  });
}
