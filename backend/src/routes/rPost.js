import express from 'express'

// Controllers
import postController from '../controllers/cPost.js'

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

export default router;

