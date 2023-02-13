import { IEventRepository } from 'Repositories/IEventRepository'
import { IDeleteEventsByWeekDayDTO } from './IDeleteEventsByWeekDayDTO'

export class DeleteEventsByWeekDayUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IDeleteEventsByWeekDayDTO) {
    const { dayOfTheWeek } = data
    const dayChosen = parseInt(dayOfTheWeek)
    if (isNaN(dayChosen) || dayChosen < 0 || dayChosen > 6) {
      throw new Error('Please, put just numbers of 0 to 6 (representing the week days)')
    }

    const events = (await this.eventsRepository.findAll()).filter(obj => obj.dateTime.getDay() === dayChosen)

    if (events.length === 0) {
      throw new Error('No events found to delete.')
    }

    await this.eventsRepository.deleteAll(events)

    return events.length
  }
}
