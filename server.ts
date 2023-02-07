import { config } from 'dotenv'
config()

import express from 'express'
import userRoutes from './src/routes/users'
const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})