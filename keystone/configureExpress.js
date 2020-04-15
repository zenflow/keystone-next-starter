function createConfigureExpress (keystone) {
  return app => {
    app.set('trust proxy', 1)
    /* Not used, but `keystone.executeQuery is awesome inside getServerProps
    app.use((req, res, next) => {
      req.keystone = keystone
      next()
    });
    */
  }
}

module.exports = {createConfigureExpress}
