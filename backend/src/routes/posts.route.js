const express = require('express')

// Controllers
const postController = require('../controllers/posts.controller')

// Router Initializer
const router = express.Router()

/* ** Routers ** */
// Hello World (Test)
router.post('/hello', postController.helloWorld)

// Creating Post
router.post('/create', postController.createPost)

// Reading Post
router.get('/read', postController.readPosts)

// Reading Post
router.get('/read/:id', postController.readPost)

// Updating Post
router.patch('/update/:id', postController.updatePost)

// Deleting Post
router.delete('/delete/:id', postController.deletePost)

module.exports = router

