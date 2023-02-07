import { config } from 'dotenv'
config()

import express from 'express'
import usersRoutes from './src/routes/users'
import eventsRoutes from './src/routes/events'
const app = express()

app.use(express.json())

app.use('/api/v1/events', eventsRoutes)
app.use('/api/v1/users', usersRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})