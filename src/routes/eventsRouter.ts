import { Router } from 'express'
import { createEvent, getEvents, deleteEvents, getEventById, updateEventById, deleteEventById} from './../controllers/eventsController'

const router = Router()

// utilizar router.param

router.route('/').get(getEvents).post(createEvent).delete(deleteEvents)
router.route('/:id').get(getEventById).patch(updateEventById).delete(deleteEventById)


export default router