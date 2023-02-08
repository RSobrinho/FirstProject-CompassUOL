import { Router } from 'express'
import { getEvents, getEventById, createEvent} from './../controllers/eventsController'

const router = Router()

// utilizar router.param

router.route('/').get(getEvents).post(createEvent)
router.route('/:id').get(getEventById)


export default router