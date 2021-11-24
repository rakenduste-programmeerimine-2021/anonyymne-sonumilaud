const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
//const MONGODB_URI: 'mongodb://root:root@mongo/if18?authSource=admin'
//mongodb://localhost:27017
const url = process.env.DATABASE_URL || 'mongodb://root:root@localhost:27017/?authSource=admin'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
fs.readdirSync(path.join(__dirname, '/models')).forEach(file => {
  require('./models/' + file)
})
