import { Router } from 'express'
import EventController from '../Controllers/EventController'
import EventValidator from '../Validators/EventValidator'
const router = Router()

router.route('/').get(EventController.getEvents).post(new EventValidator().validateEvent, EventController.createEvent).delete(EventController.deleteEvents)
router.route('/:id').get(EventController.getEventById).patch(new EventValidator().validateEvent, EventController.updateEventById).delete(EventController.deleteEventById)

export default router
