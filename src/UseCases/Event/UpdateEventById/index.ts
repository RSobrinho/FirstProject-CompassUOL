import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { UpdateEventByIdUseCase } from './UpdateEventByIdUseCase'
import { UpdateEventByIdController } from './UpdateEventByIdController'

const mongoDBEventRepository = new MongoDBEventRepository()
const updateEventByIdUseCase = new UpdateEventByIdUseCase(mongoDBEventRepository)
const updateEventByIdController = new UpdateEventByIdController(updateEventByIdUseCase)

export { updateEventByIdUseCase, updateEventByIdController }
