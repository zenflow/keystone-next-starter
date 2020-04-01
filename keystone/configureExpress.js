function createConfigureExpress (keystone) {
  return app => {
    app.use((req, res, next) => {
      req.keystone = keystone
      next()
    });
  }
}

module.exports = {createConfigureExpress}
