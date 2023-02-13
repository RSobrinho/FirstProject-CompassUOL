import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { IGetEventsByWeekDayDTO } from './IGetEventsByWeekDayDTO'

export class GetEventsByWeekDayUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IGetEventsByWeekDayDTO) {
    const { dayOfTheWeek } = data
    const dayChosen = parseInt(dayOfTheWeek)

    if (isNaN(dayChosen) || dayChosen < 0 || dayChosen > 6) {
      throw new Error('Please, put just numbers of 0 to 6 (representing the week days)')
    }

    const eventsOfDayChosen = (await this.eventsRepository.findAll()).filter(obj => (obj.dateTime).getDay() === dayChosen)

    if (eventsOfDayChosen.length === 0) {
      throw new Error('No events found.')
    }

    return eventsOfDayChosen
  }
}
