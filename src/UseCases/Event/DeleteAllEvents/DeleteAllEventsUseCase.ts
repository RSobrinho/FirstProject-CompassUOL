import { NotFoundError } from '../../../Error/NotFoundError'
import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'

export class DeleteAllEventsUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute () {
    const qtdEvents = (await this.eventsRepository.findAll()).length

    if (qtdEvents === 0) {
      throw new NotFoundError('Events')
    }

    await this.eventsRepository.deleteAll()
    return qtdEvents
  }
}
