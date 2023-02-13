import { Router } from 'express'
import { createUserController, createUserValidator } from '../UseCases/Users/CreateUser'
import { logInUserController, logInUserValidator } from '../UseCases/Users/LogInUser'

const router = Router()

// Im not gonna use yet because have bugs to be fixed
// const logInMiddleware = (request, response, next) => {
//   logInUserValidator.validator(request, response, next)
// }

const signUpMiddleware = (request, response, next) => {
  createUserValidator.validator(request, response, next)
}

router.route('/signUp')
  .post(signUpMiddleware, (request, response) => {
    return createUserController.handle(request, response)
  })

router.route('/signIn')
  .post((request, response) => {
    return logInUserController.handle(request, response)
  })

export default router
