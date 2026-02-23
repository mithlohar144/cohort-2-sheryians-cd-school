const express = require('express');
const userController = require('../controllers/user.controller');
const identifyuUser = require('../middlewares/auth.middlewares');
const userRouter = express.Router();



/**
 * @route POST /api/users/follow/:userId
 * @desc Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyuUser, userController.followUserController)

module.exports = userRouter;