import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

// Initialize
const app = express()

// Routes
import postRoutes from '../routes/rPost.js'


/* ** Settings ** */
// Local Port
const PORT = process.env.PORT
app.set('port', PORT)

// Middlewares
app.use(express.json())
app.use(morgan('tiny'))

// Routers
app.use('/api/v1/posts', postRoutes)

export default app;