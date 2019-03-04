const mongoose = require('mongoose')
const User = require('../models/User')
const Kebab = require('../models/Kebab');

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('MongoDB ready!')
    User.seedAdminUser()
    Kebab.seedKebabs();
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}
