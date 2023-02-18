import { Router } from 'express'
import { createUserController } from '../UseCases/Users/CreateUser'
import { logInUserController } from '../UseCases/Users/LogInUser'
import { asyncHandler } from './../Utils/ErrorHandler/BaseHandler'
const router = Router()

router.route('/signUp')
  .post(asyncHandler((request, response) => {
    return createUserController.handle(request, response)
  }))

router.route('/signIn')
  .post(asyncHandler((request, response) => {
    return logInUserController.handle(request, response)
  }))

export default router
