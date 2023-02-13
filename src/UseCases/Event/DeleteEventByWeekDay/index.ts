import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { DeleteEventsByWeekDayUseCase } from './DeleteEventsByWeekDayUseCase'
import { DeleteEventsByWeekDayController } from './DeleteEventsByWeekDayController'

const mongoDBEventRepository = new MongoDBEventRepository()

const deleteEventsByWeekDayUseCase = new DeleteEventsByWeekDayUseCase(mongoDBEventRepository)

const deleteEventsByWeekDayController = new DeleteEventsByWeekDayController(deleteEventsByWeekDayUseCase)

export { deleteEventsByWeekDayUseCase, deleteEventsByWeekDayController }
