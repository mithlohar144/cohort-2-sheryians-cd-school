const express = require("express");

const authController = require("../controllers/auth.controller");
const identifyUser = require('../middlewares/auth.middlewares')
const authRoutes = express.Router();

// POST /api/auth/register
authRoutes.post("/register", authController.RegisterController);

// POST /api/auth/login
authRoutes.post("/login", authController.LoginController);


/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged in user information
 * @access Private
 */
authRoutes.get('/get-me',identifyUser, authController.getMeController);

module.exports = authRoutes;
