import { Router, Request, Response, NextFunction } from 'express'
import { createUserController } from '../UseCases/Users/CreateUser'
import { logInUserController } from '../UseCases/Users/LogInUser'
import { resetUserPasswordController } from '../UseCases/Users/ResetUserPassword'
import { asyncHandler } from '../Error/Handler'

const router = Router()

router.route('/signUp')
  .post(asyncHandler((request: Request, response: Response) => {
    return createUserController.handle(request, response)
  }))

router.route('/signIn')
  .post(asyncHandler((request: Request, response: Response) => {
    return logInUserController.handle(request, response)
  }))

router.route('/password').post(asyncHandler((request: Request, response: Response) => {
  return resetUserPasswordController.handle(request, response)
}))

export default router
