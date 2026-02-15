const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
async function CreatePostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized, Token is not provided",
    });
  }
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "User Not Authorized",
    });
  }

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: decoded.id,
  });
  res.status(201).json({
    message: "Post Created Successfully",
    post
  });
}


async function getPostsController(req, res) {
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({
      message: "Unauthorized Access",
    })
  }
  
  let decoded = null;
  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }catch(err){
    return res.status(401).json({
      message: "Token is not valid",
    })
  }

  const userId = decoded.id;
  const posts = await postModel.find({
    user: userId
  })
  res.status(200).json({
    message: "Posts fetched successfully",
    posts
  })
}


async function getPostDetailsController(req, res) {
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({
      message: "Unauthorized Access",
    })
  }
  let decoded;
  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }catch(err){
    return res.status(401).json({
      message: "Unauthorized Access",
    })
  }
  const userId = decoded.id;
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

module.exports = {
  CreatePostController,
  getPostsController,
  getPostDetailsController
};
