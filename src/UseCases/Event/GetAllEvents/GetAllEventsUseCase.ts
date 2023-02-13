import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'

export class GetAllEventsUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute () {
    const events = await this.eventsRepository.findAll()

    if (events.length === 0) {
      throw new Error('Events not found.')
    }

    return events
  }
}
