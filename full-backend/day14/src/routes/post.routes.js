const express = require("express");
const postController = require("../controllers/post.controller");
const PostRoutes = express.Router();
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()});
const identifyUser = require("../middlewares/auth.middlewares");


/**
 * POST  /api/posts  [protected]
 * req.body = { caption ,imageUrl }
 */

/** /api/posts */

PostRoutes.post("/",upload.single("image"),identifyUser, postController.CreatePostController);

/**
 * GET /api/posts/ [protected]
 */
PostRoutes.get("/", identifyUser, postController.getPostsController);


/**
 * GET /api/posts/details/:postid
 * 
 * - return an detailed about specific post with the id, also check whether the post belongs to the user 
 * that is reqesting come from 
 */


PostRoutes.get("/details/:postId",identifyUser, postController.getPostDetailsController );

/**
 * @route POST /api/posts/like/:postId
 * @desc Like a post
 * @access Private
 */

PostRoutes.post("/like/:postId", identifyUser, postController.likePostController);



module.exports = PostRoutes;