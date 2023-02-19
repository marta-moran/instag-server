const express = require("express");
const router = express.Router();
const { validateToken } = require("../middleware/jwt.middleware.js");
const fileUploader = require('../config/cloudinary.config')

const {
    publishPost,
    editPost,
    deletePost,
    getAllPosts,
    getOnePost,
    fileUpload,
    explorerPosts

} = require('../controller/post.controller');


router.put('/editPost/:id', editPost)
router.delete('/deletePost/:id', deletePost)
router.get('/getAllPosts', validateToken, getAllPosts)
router.get('/getOnePost/:id', getOnePost)
router.get('/explorerPost', explorerPosts)

router.post('/fileUpload', fileUploader.single('imageUrl'), fileUpload)
router.post('/publishPost', publishPost)


module.exports = router;