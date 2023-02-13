import { Router } from 'express'
import { createUserController, createUserValidator } from '../UseCases/Users/CreateUser'
import { logInUserController, logInUserValidator } from '../UseCases/Users/LogInUser'
// import UserController from '../Controllers/UserController'
// import UserValidator from '../Validators/UserValidator'

const router = Router()

// router.post('/signUp', (request, response) => {
//   return createUserController.handle(request, response)
// })

router.use((request, response, next) => {
  createUserValidator.validator(request, response, next)
})
router.route('/signUp')
  .post((request, response) => {
    return createUserController.handle(request, response)
  })

router.use((request, response, next) => {
  logInUserValidator.validator(request, response, next)
})

router.route('/signIn')
  .post((request, response) => {
    return logInUserController.handle(request, response)
  })

// router.route('/signUp').post(UserValidator.valSignUp, UserController.signUp)
// router.route('/signIn').post(UserValidator.valSignIn, UserController.signIn)

export default router
