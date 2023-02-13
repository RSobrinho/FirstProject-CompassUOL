import { Request, Response } from 'express'
import { LogInUserUseCase } from './LogInUserUseCase'

export class LogInUserController {
  private logInUserUseCase: LogInUserUseCase

  constructor (logInUserUseCase: LogInUserUseCase) {
    this.logInUserUseCase = logInUserUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try {
      await this.logInUserUseCase.execute({ email, password })
      return res.status(200).json({ message: 'Success' })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
