import { DeleteEventsByWeekDayUseCase } from './DeleteEventsByWeekDayUseCase'
import { Request, Response } from 'express'

export class DeleteEventsByWeekDayController {
  private deleteEventsByWeekDayUseCase: DeleteEventsByWeekDayUseCase

  constructor (deleteEventsByWeekDayUseCase: DeleteEventsByWeekDayUseCase) {
    this.deleteEventsByWeekDayUseCase = deleteEventsByWeekDayUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const dayOfTheWeek = req.query.dayOfTheWeek as string

    try {
      const eventsDeleted = await this.deleteEventsByWeekDayUseCase.execute({ dayOfTheWeek })

      return res.status(200).json({ status: 'Success', message: `${eventsDeleted} was deleted successfully` })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
