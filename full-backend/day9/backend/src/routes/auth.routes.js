const express = require("express");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const authRoutes = express.Router();

authRoutes.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User Already Exists ",
    });
  }
  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await userModel.create({
    email,
    password: hash,
    name,
  });

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token", token);
  res.status(201).json({
    message: "user register success",
    user,
    token,
  });
});


authRoutes.post("/login", async(req,res)=>{
  const { email, password } = req.body
  const user = await userModel.findOne({ email })
  if(!user){
    res.status(404).json({
      message: "invalid email or password",
    })
  }
  const isPasswordMatch = user.password === crypto.createHash("md5").update(password).digest("hex")
  if (!isPasswordMatch) {
    res.status(401).json({
      message: "invalid email or password", 
    })
  }
  const token = jwt.sign({
    id:user.id,
    email:user.email
  },
  process.env.JWT_SECRET
  )
  res.cookie("jwt_token", token)
  res.status(200).json({
    message:"Login Success",
    user,
    
  })
})

authRoutes.post("/protected", async (req, res) => {
  console.log(req.cookies);
  

  res.status(200).json({
    message:" This is a Protected Route"
})
});
module.exports = authRoutes;
