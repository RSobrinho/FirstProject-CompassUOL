import { Router } from 'express'
import UserController from '../Controllers/UserController'
import UserValidator from '../Validators/UserValidator'
const router = Router()

router.route('/signUp').post(new UserValidator().valSignUp, UserController.signUp)
router.route('/signIn').post(new UserValidator().valSignIn, UserController.signIn)

export default router
