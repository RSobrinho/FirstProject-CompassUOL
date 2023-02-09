import { Router } from 'express'
import { signInUser, signUpUser } from './../controllers/usersController'

const router = Router()

router.route('/signUp').post(signUpUser)
router.route('/signIn').post(signInUser)

export default router