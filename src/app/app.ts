import express from 'express'
const app = express()

import usersRoutes from './../routes/users'
import eventsRoutes from './../routes/users'

app.use(express.json())

app.use('/api/v1/events', eventsRoutes)
app.use('/api/v1/users', usersRoutes)

export default app