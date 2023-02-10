import { Router } from 'express'
import EventController from '../Controllers/EventController'

const router = Router()

router.route('/').get(EventController.getEvents).post(EventController.createEvent).delete(EventController.deleteEvents)
router.route('/:id').get(EventController.getEventById).patch(EventController.updateEventById).delete(EventController.deleteEventById)

export default router
