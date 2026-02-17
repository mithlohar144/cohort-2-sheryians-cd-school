const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");


async function identifyUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized Access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Token is not valid",
    });
  }

  // req.user = user;
  // next();
}

module.exports = identifyUser;
