const user = require('./user')

function router(app) {
  app.use('/api/users', user)
}

module.exports = router
