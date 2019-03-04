const authRoutes = require('../routes/auth')
const kebabRoutes = require('../routes/kebab')
const statsRoutes = require('../routes/stats')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/kebab', kebabRoutes)
  app.use('/stats', statsRoutes)
  app.use('/orders', ordersRoutes)
}
