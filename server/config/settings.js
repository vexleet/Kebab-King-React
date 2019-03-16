const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../'))

module.exports = {
  development: {
    rootPath: rootPath,
    // db: 'mongodb://localhost:27017/KebabKing', FOR LOCAL DATABASE
    db: 'mongodb://admin:db123456@ds127545.mlab.com:27545/test-1',
    port: 5000
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
