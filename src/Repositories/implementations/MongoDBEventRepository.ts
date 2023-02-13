import { Event } from 'Entities/Event'
import { IEventRepository } from '../Interfaces/IEventRepository'
import EventSchema from '../Schemas/EventSchema'

export class MongoDBEventRepository implements IEventRepository {
  async save (event: Event): Promise<void> {
    await EventSchema.create(event)
  }

  async findAll (): Promise<Event[]> {
    return await EventSchema.find()
  }

  async findById (id: string): Promise<Event> {
    return await EventSchema.findById(id)
  }

  async deleteById (id: string): Promise<boolean> {
    const deletedEvent = await EventSchema.findByIdAndDelete(id)
    if (deletedEvent) {
      return true
    }
    return false
  }

  async updateById (id: string): Promise<Event> {
    return await EventSchema.findByIdAndUpdate(id)
  }

  async deleteAll (events?: Event[]): Promise<void> {
    if (events) {
      events.forEach(async (event) => {
        await EventSchema.deleteOne({ dateTime: event.dateTime })
      })
    } else {
      await EventSchema.deleteMany({})
    }
  }
}
