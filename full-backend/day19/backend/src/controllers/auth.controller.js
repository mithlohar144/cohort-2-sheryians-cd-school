const userModel = require("../models/user.model");
const crypt = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

 async function RegisterController(req, res) {
  const { username, email, password, bio, profile_image } = req.body;

  const isUserAlreadtExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadtExist) {
    return res.status(409).json({
      message:
        "User already Exists" +
        (isUserAlreadtExist.email == email
          ? "Email already Exists"
          : "Username already Exists"),
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    bio,
    profile_image,
    password: hash,
  });
  const token = jwt.sign(
    {
      id: user._id,
      username:user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "User Registered Successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profile_image: user.profile_image,
    },
  });
}
async function LoginController  (req, res)  {
  const { username, email, password } = req.body;

  /**
   * username
   * password
   *
   * email
   * password
   */

  /**
   * {username:a, email:underfinqed, password:b}
   */
  const user = await userModel.findOne({
    $or: [
      {
        username: username,
      },
      {
        email: email,
      },
    ],
  }).select("+password");
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign({
    id: user._id,
    username: user.username,
  }, process.env.JWT_SECRET, { expiresIn: "1d" });

  res.cookie("token", token);
  res.status(200).json({
    message: "User Logged In Successfully",
    user:{
        username: user.username,
        email: user.email,
        bio: user.bio,
        profile_image: user.profile_image
    }
    });
}

async function getMeController(req, res) {
  const userId = req.user.id;

  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.status(200).json({
    message: "User fetched successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profile_image: user.profile_image,
    }
  });
}
module.exports = {
    LoginController,
    RegisterController,
    getMeController
}