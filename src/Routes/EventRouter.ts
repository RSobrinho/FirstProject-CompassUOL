import { Router } from 'express'
import { deleteEventsByWeekDayController } from '../UseCases/Event/DeleteEventByWeekDay'
import { getEventsByWeekDayController } from '../UseCases/Event/GetEventsByWeekDay'
import { getAllEventsController } from '../UseCases/Event/GetAllEvents'
import { createEventController } from '../UseCases/Event/CreateEvent'
import { deleteEventByIdController } from '../UseCases/Event/DeleteEventById'
import { getEventByIdController } from '../UseCases/Event/GetEventById'
import { updateEventByIdController } from '../UseCases/Event/UpdateEventById'
import { asyncHandler } from '../Utils/ErrorHandler/BaseHandler'

const router = Router()
router.route('/')
  .get(asyncHandler((request, response) => {
    if (request.query.dayOfTheWeek) {
      return getEventsByWeekDayController.handle(request, response)
    } else {
      return getAllEventsController.handle(request, response)
    }
  }))
  .delete(asyncHandler((request, response) => {
    return deleteEventsByWeekDayController.handle(request, response)
  }))
  .post(asyncHandler((request, response) => {
    return createEventController.handle(request, response)
  }))

router.route('/:id')
  .get(asyncHandler((request, response) => {
    return getEventByIdController.handle(request, response)
  }))
  .patch(asyncHandler((request, response) => {
    return updateEventByIdController.handle(request, response)
  }))
  .delete(asyncHandler((request, response) => {
    return deleteEventByIdController.handle(request, response)
  }))

export default router
