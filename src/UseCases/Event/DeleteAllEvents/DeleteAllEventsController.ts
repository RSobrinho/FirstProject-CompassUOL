import { DeleteAllEventsUseCase } from './DeleteAllEventsUseCase'
import { Request, Response } from 'express'

export class DeleteAllEventsController {
  private deleteAllEventsUseCase: DeleteAllEventsUseCase

  constructor (deleteAllEventsUseCase: DeleteAllEventsUseCase) {
    this.deleteAllEventsUseCase = deleteAllEventsUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const events = await this.deleteAllEventsUseCase.execute()
    return res.status(204).json({ status: 'Success', deleted: `${events} event(s) was deleted successfully` })
  }
}
