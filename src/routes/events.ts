import { Router } from 'express'
import { getAllEvents, getEventById, createEvent } from './../controllers/eventsController'

const router = Router()

router.route('/').get(getAllEvents).post(createEvent)
router.route('/:id').get(getEventById)

// .get('/:dayOfTheWeek, getEventByDayOfWeek)
export default router

//