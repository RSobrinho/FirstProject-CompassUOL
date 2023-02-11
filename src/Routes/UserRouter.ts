import { Router } from 'express'
import UserController from '../Controllers/UserController'
import UserValidator from '../Validators/UserValidator'
const router = Router()

router.route('/signUp').post(UserValidator.valSignUp, UserController.signUp)
router.route('/signIn').post(UserValidator.valSignIn, UserController.signIn)

export default router
