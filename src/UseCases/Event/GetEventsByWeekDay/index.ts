import { MongoDBEventRepository } from '../../../Repositories/implementations/MongoDBEventRepository'
import { GetEventsByWeekDayUseCase } from './GetEventsByWeekDayUseCase'
import { GetEventsByWeekDayController } from './GetEventsByWeekDayController'

const mongoDBEventRepository = new MongoDBEventRepository()

const getEventsByWeekDayUseCase = new GetEventsByWeekDayUseCase(mongoDBEventRepository)

const getEventsByWeekDayController = new GetEventsByWeekDayController(getEventsByWeekDayUseCase)

export { getEventsByWeekDayUseCase, getEventsByWeekDayController }
