const express = require("express");

const authController = require("../controllers/auth.controller");

const authRoutes = express.Router();

// POST /api/auth/register
authRoutes.post("/register", authController.RegisterController);

// POST /api/auth/login
authRoutes.post("/login", authController.LoginController);

module.exports = authRoutes;
