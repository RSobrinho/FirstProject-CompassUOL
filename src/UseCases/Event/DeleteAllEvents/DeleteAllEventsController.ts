import { DeleteAllEventsUseCase } from './DeleteAllEventsUseCase'
import { Request, Response } from 'express'

export class DeleteAllEventsController {
  private deleteAllEventsUseCase: DeleteAllEventsUseCase

  constructor (deleteAllEventsUseCase: DeleteAllEventsUseCase) {
    this.deleteAllEventsUseCase = deleteAllEventsUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const events = await this.deleteAllEventsUseCase.execute()
      return res.status(200).json({ status: 'Success', events })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
