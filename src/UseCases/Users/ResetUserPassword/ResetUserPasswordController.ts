import { Request, Response } from 'express'
import { ResetUserPasswordUseCase } from './ResetUserPasswordUseCase'
export class ResetUserPasswordController {
  private resetUserPasswordUseCase: ResetUserPasswordUseCase

  constructor (resetUserPasswordUseCase: ResetUserPasswordUseCase) {
    this.resetUserPasswordUseCase = resetUserPasswordUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { _id, password } = req.body

    await this.resetUserPasswordUseCase.execute({ _id, password })
    return res.status(200).json({ status: 'Success', message: 'Password changed successfully' })
  }
}
