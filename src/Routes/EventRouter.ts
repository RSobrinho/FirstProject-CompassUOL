import { Router } from 'express'
import { deleteEventsByWeekDayController } from '../UseCases/Event/DeleteEventByWeekDay'
import { getEventsByWeekDayController } from '../UseCases/Event/GetEventsByWeekDay'
import { getAllEventsController } from '../UseCases/Event/GetAllEvents'
import { createEventController, createEventValidator } from '../UseCases/Event/CreateEvent'
import { deleteEventByIdController } from '../UseCases/Event/DeleteEventById'
import { getEventByIdController } from '../UseCases/Event/GetEventById'
import { updateEventByIdController } from '../UseCases/Event/UpdateEventById'

const router = Router()

const postEventMiddleware = (request, response, next) => {
  createEventValidator.validator(request, response, next)
}

router.route('/')
  .get((request, response) => {
    if (request.query.dayOfTheWeek) {
      return getEventsByWeekDayController.handle(request, response)
    } else {
      return getAllEventsController.handle(request, response)
    }
  })
  .delete((request, response) => {
    return deleteEventsByWeekDayController.handle(request, response)
  })
  .post(postEventMiddleware, (request, response) => {
    return createEventController.handle(request, response)
  })

router.route('/:id')
  .get((request, response) => {
    return getEventByIdController.handle(request, response)
  })
  .patch((request, response) => {
    return updateEventByIdController.handle(request, response)
  })
  .delete((request, response) => {
    return deleteEventByIdController.handle(request, response)
  })

export default router
