import { Event } from '../../../Entities/Event'
import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { ICreateEventDTO } from './ICreateEventDTO'

export class CreateEventUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: ICreateEventDTO) {
    const event = new Event(data)
    await this.eventsRepository.save(event)
  }
}
