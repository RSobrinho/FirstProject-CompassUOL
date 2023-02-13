import { GetAllEventsUseCase } from './GetAllEventsUseCase'
import { Request, Response } from 'express'

export class GetAllEventsController {
  private getAllEventsUseCase: GetAllEventsUseCase

  constructor (getAllEventsUseCase: GetAllEventsUseCase) {
    this.getAllEventsUseCase = getAllEventsUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const events = await this.getAllEventsUseCase.execute()

      return res.status(200).json({ status: 'Success', events })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
