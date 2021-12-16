const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
//const MONGODB_URI: 'mongodb://root:root@mongo/if18?authSource=admin'
//mongodb://localhost:27017
const url = process.env.DATABASE_URL || 'mongodb+srv://root:root@testapp.1s3bo.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

require('./models/User');
require('./models/Topic');
require('./models/Thought');
require('./models/Reaction');
