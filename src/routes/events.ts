import { Router } from 'express'
import { getAllEvents } from './../controllers/eventsController'

const router = Router()

router.get('/', getAllEvents)

export default router