const express = require('express')

// Controllers
const postController = require('../controllers/posts.controller')

// Router Initializer
const router = express.Router()

// Routers
router.post('/hello', postController.helloWorld)
router.post('/create', postController.createPost)

module.exports = router

