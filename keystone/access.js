const userIsAdmin = ({ authentication: { item: user } }) => {
  return !!user && user.isAdmin
}
const userIsItem = ({ itemId, authentication: { item: user } }) => {
  return !!user && user.id === itemId
  // return !!user && { id: user.id }
}
const userIsAdminOrItem = auth => userIsAdmin(auth) || userIsItem(auth)

module.exports = {
  userIsAdmin,
  userIsItem,
  userIsAdminOrItem,
}
