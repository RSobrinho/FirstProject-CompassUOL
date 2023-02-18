import { Router } from 'express'
import { asyncHandler } from './../Utils/ErrorHandler/BaseHandler'

const router = Router()

asyncHandler(router.get('/', (req, res) => {
  res.status(200).json({ status: 'Success', message: 'Seja bem vindo a minha API!' })
}))

export default router
