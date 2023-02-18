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
    fileUpload

} = require('../controller/post.controller');


router.put('/editPost/:id', editPost)
router.delete('/deletePost', deletePost)
router.get('/getAllPosts', validateToken, getAllPosts)
router.get('/getOnePost/:id', getOnePost)

router.post('/fileUpload', fileUploader.single('imageUrl'), fileUpload)

router.post('/publishPost', publishPost)


module.exports = router;