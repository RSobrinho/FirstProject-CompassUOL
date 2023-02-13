import { DeleteEventByIdUseCase } from './DeleteEventByIdUseCase'
import { Request, Response } from 'express'

export class DeleteEventByIdController {
  private deleteEventByIdUseCase: DeleteEventByIdUseCase

  constructor (deleteEventByIdUseCase: DeleteEventByIdUseCase) {
    this.deleteEventByIdUseCase = deleteEventByIdUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      await this.deleteEventByIdUseCase.execute({ id })

      return res.status(200).json({ status: 'Success' })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
