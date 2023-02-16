const express = require("express");
const router = express.Router();

const {
    publishPost,
    editPost,
    deletePost,
    getAllPosts,
    getOnePost

} = require('../controller/post.controller');


router.put('/editPost/:id', editPost)
router.delete('/deletePost', deletePost)
router.get('/getAllPosts', getAllPosts)
router.get('/getOnePost/:id', getOnePost)

router.post('/publishPost', publishPost)


module.exports = router;