import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ status: 'Success', message: 'Seja bem vindo a minha API!' })
})

export default router
