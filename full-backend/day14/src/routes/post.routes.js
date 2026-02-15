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

/**
 * GET /api/posts/ [protected]
 */
PostRoutes.get("/", postController.getPostsController);


/**
 * GET /api/posts/details/:postid
 * 
 * - return an detailed about specific post with the id, also check whether the post belongs to the user 
 * that is reqesting come from 
 */


PostRoutes.get("/details/:postId",postController.getPostDetailsController );
module.exports = PostRoutes;




