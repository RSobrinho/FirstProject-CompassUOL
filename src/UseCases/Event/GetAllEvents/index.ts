import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { GetAllEventsUseCase } from './GetAllEventsUseCase'
import { GetAllEventsController } from './GetAllEventsController'

const mongoDBEventRepository = new MongoDBEventRepository()

const getAllEventsUseCase = new GetAllEventsUseCase(mongoDBEventRepository)

const getAllEventsController = new GetAllEventsController(getAllEventsUseCase)
export { getAllEventsUseCase, getAllEventsController }
