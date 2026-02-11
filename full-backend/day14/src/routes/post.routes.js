const express = require("express");
const postController = require("../controllers/post.controller");
const PostRoutes = express.Router();
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()});



/**
 * POST  /api/posts  [protected]
 * req.body = { caption ,imageUrl }
 */

/** /api/posts */

PostRoutes.post("/",upload.single("image"), postController.CreatePostController);
module.exports = PostRoutes;




