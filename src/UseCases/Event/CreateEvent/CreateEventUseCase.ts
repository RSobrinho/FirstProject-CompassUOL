import { Event } from '../../../Entities/Event'
import { IEventRepository } from 'Repositories/Interfaces/IEventRepository'
import { ICreateEventDTO } from './ICreateEventDTO'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Utils/ErrorHandler/ValidationError'

export class CreateEventUseCase {
  private eventsRepository: IEventRepository

  constructor (eventsRepository: IEventRepository) {
    this.eventsRepository = eventsRepository
  }

  async execute (data: ICreateEventDTO) {
    const { description, dateTime } = new Event(data)
    const errors = await validate({ description, dateTime })

    if (errors.length > 0) {
      throw new ValidationError(errors[0].constraints)
    }

    const event = new Event(data)
    await this.eventsRepository.save(event)
  }
}
