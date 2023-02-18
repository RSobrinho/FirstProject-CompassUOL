import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
export class CreateUserController {
  private createUserUseCase: CreateUserUseCase

  constructor (createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    await this.createUserUseCase.execute(req.body)
    return res.status(200).json({ status: 'Success', message: 'User created successfully' })
  }
}
