import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { DeleteAllEventsUseCase } from './DeleteAllEventsUseCase'
import { DeleteAllEventsController } from './DeleteAllEventsController'

const mongoDBEventRepository = new MongoDBEventRepository()
const deleteAllEventsUseCase = new DeleteAllEventsUseCase(mongoDBEventRepository)
const deleteAllEventsController = new DeleteAllEventsController(deleteAllEventsUseCase)

export { deleteAllEventsUseCase, deleteAllEventsController }
