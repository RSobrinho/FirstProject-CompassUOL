import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { IDeleteEventByIdDTO } from './IDeleteEventByIdDTO'

export class DeleteEventByIdUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: IDeleteEventByIdDTO) {
    const event = await this.eventsRepository.deleteById(data.id)
    if (!event) {
      throw new Error('Event not found to delete')
    }
  }
}
