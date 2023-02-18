import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { CreateEventUseCase } from './CreateEventUseCase'
import { CreateEventController } from './CreateEventController'

const mongoDBEventRepository = new MongoDBEventRepository()
const createEventUseCase = new CreateEventUseCase(mongoDBEventRepository)
const createEventController = new CreateEventController(createEventUseCase)

export { createEventUseCase, createEventController }
