import { GetEventByIdUseCase } from './GetEventByIdUseCase'
import { Request, Response } from 'express'

export class GetEventByIdController {
  private getEventByIdUseCase: GetEventByIdUseCase

  constructor (getEventByIdUseCase: GetEventByIdUseCase) {
    this.getEventByIdUseCase = getEventByIdUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const id = req.params.id

    try {
      const event = await this.getEventByIdUseCase.execute({ id })

      return res.status(200).json({ status: 'Success', event })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
