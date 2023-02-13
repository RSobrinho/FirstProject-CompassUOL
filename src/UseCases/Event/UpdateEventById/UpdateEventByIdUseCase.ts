import { IEventRepository } from 'Repositories/IEventRepository'
import { IUpdateEventByIdDTO } from './IUpdateEventByIdDTO'

export class UpdateEventByIdUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IUpdateEventByIdDTO) {
    const event = await this.eventsRepository.updateById(data.id)

    if (!event) {
      throw new Error('Event not found to delete')
    }

    return event
  }
}
