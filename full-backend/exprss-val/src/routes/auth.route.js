import { registerUser } from '../controller/auth.controller.js'
import { Router } from 'express'
import { registerValidation } from '../validation/auth.validator.js'

const authRouter = Router()
authRouter.post('/register', registerValidation, registerUser)


export default authRouter