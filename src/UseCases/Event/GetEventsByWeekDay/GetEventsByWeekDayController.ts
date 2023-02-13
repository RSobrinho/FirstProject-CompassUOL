import { GetEventsByWeekDayUseCase } from './GetEventsByWeekDayUseCase'
import { Request, Response } from 'express'

export class GetEventsByWeekDayController {
  private getEventsByWeekDayUseCase: GetEventsByWeekDayUseCase

  constructor (getEventsByWeekDayUseCase: GetEventsByWeekDayUseCase) {
    this.getEventsByWeekDayUseCase = getEventsByWeekDayUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const dayOfTheWeek = req.query.dayOfTheWeek as string
    try {
      const events = await this.getEventsByWeekDayUseCase.execute({ dayOfTheWeek })

      return res.status(200).json({ status: 'Success', events })
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' })
    }
  }
}
