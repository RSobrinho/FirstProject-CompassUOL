import { UpdateEventByIdUseCase } from './UpdateEventByIdUseCase'
import { Request, Response } from 'express'

export class UpdateEventByIdController {
  private updateEventByIdUseCase: UpdateEventByIdUseCase

  constructor (updateEventByIdUseCase: UpdateEventByIdUseCase) {
    this.updateEventByIdUseCase = updateEventByIdUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const id = req.params.id

    try {
      const event = await this.updateEventByIdUseCase.execute({ id })
      return res.status(200).json({ status: 'Success', event })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
