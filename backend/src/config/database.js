const mongoose = require('mongoose')
require('dotenv').config() 

// MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log(`Database is Connected!`))
    .catch(err => console.error(err))