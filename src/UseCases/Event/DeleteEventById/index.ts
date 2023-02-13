import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { DeleteEventByIdUseCase } from './DeleteEventByIdUseCase'
import { DeleteEventByIdController } from './DeleteEventByIdController'

const mongoDBEventRepository = new MongoDBEventRepository()

const deleteEventByIdUseCase = new DeleteEventByIdUseCase(mongoDBEventRepository)

const deleteEventByIdController = new DeleteEventByIdController(deleteEventByIdUseCase)

export { deleteEventByIdUseCase, deleteEventByIdController }
