const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model");
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
async function CreatePostController(req, res) {
  console.log(req.body, req.file);

  

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: req.user.id,
  });
  res.status(201).json({
    message: "Post Created Successfully",
    post
  });
}


async function getPostsController(req, res) {
  

  const userId = req.user.id;
  const posts = await postModel.find({
    user: userId
  })
  res.status(200).json({
    message: "Posts fetched successfully",
    posts
  })
}


async function getPostDetailsController(req, res) {
  
  const userId = req.user.id;
  const postId  = req.params.postId;

  const post = await postModel.findById(postId);
  if(!post){
    return res.status(404).json({
      message: "Post Not Found",
    })
  }
  const isValidUser = post.user.toString() === userId;
  if(!isValidUser){
    return res.status(403).json({
      message: "Forbidden Access",
    })
  }
  return res.status(200).json({
    message: "Post Details Fetched Successfully",
    post
  })
}


async function likePostController(req, res) {
  const username = req.user.username;
  const postId  = req.params.postId;

  const post = await postModel.findById(postId);
  if(!post){
    return res.status(404).json({
      message: "Post Not Found",
    })
  }
  const like = await likeModel.create({
    user: username,
    post: postId
  })
  res.status(200).json({
    message: "Post Liked Successfully",
    like
  })
}
module.exports = {
  CreatePostController,
  getPostsController,
  getPostDetailsController,
  likePostController
};
