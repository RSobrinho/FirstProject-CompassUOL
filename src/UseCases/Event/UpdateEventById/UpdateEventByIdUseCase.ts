import { NotFoundError } from '../../../Error/NotFoundError'
import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { IUpdateEventByIdDTO } from './IUpdateEventByIdDTO'

export class UpdateEventByIdUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IUpdateEventByIdDTO) {
    const event = await this.eventsRepository.updateById(data.id)

    if (!event) {
      throw new NotFoundError('Event')
    }

    return event
  }
}
