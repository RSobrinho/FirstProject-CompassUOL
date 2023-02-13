import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { GetEventByIdUseCase } from './GetEventByIdUseCase'
import { GetEventByIdController } from './GetEventByIdController'

const mongoDBEventRepository = new MongoDBEventRepository()
const getEventByIdUseCase = new GetEventByIdUseCase(mongoDBEventRepository)
const getEventByIdController = new GetEventByIdController(getEventByIdUseCase)

export { getEventByIdUseCase, getEventByIdController }
