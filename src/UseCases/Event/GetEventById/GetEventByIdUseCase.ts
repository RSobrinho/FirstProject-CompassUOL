import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { IGetEventByIdDTO } from './IGetEventByIdDTO'

export class GetEventByIdUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IGetEventByIdDTO) {
    const event = await this.eventsRepository.findById(data.id)

    if (!event) {
      throw new Error('Event not found to delete')
    }

    return event
  }
}
