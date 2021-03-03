const express = require('express')
require('dotenv').config()

// Initialize
const app = express()

// Routes
const postRoutes = require('../routes/posts.route')

/* ** Settings ** */
// Local Port
const PORT = process.env.PORT
app.set('port', PORT)

// Middlewares
app.use(express.json())

// Routers
app.use('/api/v1/posts', postRoutes)

module.exports = app;