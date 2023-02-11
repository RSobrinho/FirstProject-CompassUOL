import express from 'express'
import mongoose from 'mongoose'
import UserRouter from './Routes/UserRouter'
import EventRouter from './Routes/EventRouter'
import BaseRouter from './Routes/BaseRouter'
import { config } from 'dotenv'

class App {
  public express: express.Application
  public constructor () {
    config()

    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
  }

  private database () {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.DB_CONNECTION).then(() => console.log('DB connection established'))
  }

  private routes () {
    this.express.use('/', BaseRouter)
    this.express.use('/api/v1/users', UserRouter)
    this.express.use('/api/v1/events', EventRouter)
  }
}

export default new App().express
