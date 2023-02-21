import { Request, Response } from 'express'
import { LogInUserUseCase } from './LogInUserUseCase'

export class LogInUserController {
  private logInUserUseCase: LogInUserUseCase

  constructor (logInUserUseCase: LogInUserUseCase) {
    this.logInUserUseCase = logInUserUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const token = await this.logInUserUseCase.execute(req.body)
    return res.status(200).json({ status: 'Success', token, message: 'User successfully logged in' })
  }
}
