import { ValidationError } from '../../../Error/ValidationError'
import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { IGetEventsByWeekDayDTO } from './IGetEventsByWeekDayDTO'
import { NotFoundError } from '../../../Error/NotFoundError'

export class GetEventsByWeekDayUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IGetEventsByWeekDayDTO) {
    const { dayOfTheWeek } = data
    const dayChosen = parseInt(dayOfTheWeek)

    if (isNaN(dayChosen) || dayChosen < 0 || dayChosen > 6) {
      throw new ValidationError({ dayChosenError: 'Please, put just numbers of 0 to 6 (representing the week days)' })
    }

    const eventsOfDayChosen = (await this.eventsRepository.findAll()).filter(obj => (obj.dateTime).getDay() === dayChosen)

    if (eventsOfDayChosen.length === 0) {
      throw new NotFoundError('Events')
    }

    return eventsOfDayChosen
  }
}
