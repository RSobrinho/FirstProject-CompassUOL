import { Router } from 'express'
import { createUserController, createUserValidator } from '../UseCases/Users/CreateUser'
import { logInUserController, logInUserValidator } from '../UseCases/Users/LogInUser'

const router = Router()

// router.post('/signUp', (request, response) => {
//   return createUserController.handle(request, response)
// })

const logInMiddleware = (request, response, next) => {
  logInUserValidator.validator(request, response, next)
}

const signUpMiddleware = (request, response, next) => {
  createUserValidator.validator(request, response, next)
}

router.route('/signUp')
  .post(signUpMiddleware, (request, response) => {
    return createUserController.handle(request, response)
  })

router.route('/signIn')
  .post(logInMiddleware, (request, response) => {
    return logInUserController.handle(request, response)
  })

export default router
