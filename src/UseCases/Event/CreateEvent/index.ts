import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { CreateEventUseCase } from './CreateEventUseCase'
import { CreateEventController } from './CreateEventController'
import { CreateEventValidator } from './CreateEventValidator'

const createEventValidator = new CreateEventValidator()

const mongoDBEventRepository = new MongoDBEventRepository()

const createEventUseCase = new CreateEventUseCase(mongoDBEventRepository)

const createEventController = new CreateEventController(createEventUseCase)
export { createEventUseCase, createEventController, createEventValidator }
