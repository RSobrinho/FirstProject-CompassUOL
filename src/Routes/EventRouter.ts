import { Router, Request, Response, NextFunction } from 'express'
import { deleteEventsByWeekDayController } from '../UseCases/Event/DeleteEventByWeekDay'
import { getEventsByWeekDayController } from '../UseCases/Event/GetEventsByWeekDay'
import { getAllEventsController } from '../UseCases/Event/GetAllEvents'
import { createEventController } from '../UseCases/Event/CreateEvent'
import { deleteEventByIdController } from '../UseCases/Event/DeleteEventById'
import { getEventByIdController } from '../UseCases/Event/GetEventById'
import { updateEventByIdController } from '../UseCases/Event/UpdateEventById'
import { asyncHandler } from '../Error/Handler'
import { authenticationController } from '../UseCases/Users/Authentication'
const router = Router()

const authenticationMiddleware = asyncHandler((request: Request, response: Response, next: NextFunction) => {
  return authenticationController.handle(request, response, next)
})

router.route('/')
  .get(authenticationMiddleware, asyncHandler((request: Request, response: Response) => {
    if (request.query.dayOfTheWeek) {
      return getEventsByWeekDayController.handle(request, response)
    } else {
      return getAllEventsController.handle(request, response)
    }
  }))
  .delete(authenticationMiddleware, asyncHandler((request: Request, response: Response) => {
    return deleteEventsByWeekDayController.handle(request, response)
  }))
  .post(authenticationMiddleware, asyncHandler((request: Request, response: Response) => {
    return createEventController.handle(request, response)
  }))

router.route('/:id')
  .get(authenticationMiddleware, asyncHandler((request: Request, response: Response) => {
    return getEventByIdController.handle(request, response)
  }))
  .patch(authenticationMiddleware, asyncHandler((request: Request, response: Response) => {
    return updateEventByIdController.handle(request, response)
  }))
  .delete(authenticationMiddleware, asyncHandler((request: Request, response: Response) => {
    return deleteEventByIdController.handle(request, response)
  }))

export default router
