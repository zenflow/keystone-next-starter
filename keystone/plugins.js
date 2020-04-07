const {atTracking, byTracking} = require('@keystonejs/list-plugins');

const getPlugins = () => [
  atTracking({
    createdAtField: 'createdAt',
    updatedAtField: 'updatedAt',
    format: 'YYYY-MM-DD h:mm A',
    access: {
      read: true,
      create: false,
      update: false
    },
  }),
  byTracking({
    createdByField: 'createdBy',
    updatedByField: 'updatedBy',
    ref: 'User',
    access: {
      read: true,
      create: false,
      update: false
    },
  })
]

module.exports = {getPlugins}
