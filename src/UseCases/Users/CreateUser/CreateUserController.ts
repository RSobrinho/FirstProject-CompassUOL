import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
export class CreateUserController {
  private createUserUseCase: CreateUserUseCase

  constructor (createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, birthDate, city, country, email, password, confirmPassword } = req.body

    try {
      await this.createUserUseCase.execute({ firstName, lastName, birthDate, city, country, email, password, confirmPassword })
      return res.status(200).json({ status: 'User created successfully' })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
