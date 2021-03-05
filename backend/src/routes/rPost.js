import express from 'express'

// Controllers
import {
    helloWorld,
    createPost,
    readPost,
    readPosts,
    updatePost,
    deletePost
} from '../controllers/cPost.js'

// Router Initializer
const router = express.Router()

/* ** Routers ** */
// Hello World (Test)
router.post('/hello', helloWorld)

// Creating Post
router.post('/create', createPost)

// Reading Post
router.get('/read', readPosts)

// Reading Post
router.get('/read/:id', readPost)

// Updating Post
router.patch('/update/:id', updatePost)

// Deleting Post
router.delete('/delete/:id', deletePost)

export default router;

