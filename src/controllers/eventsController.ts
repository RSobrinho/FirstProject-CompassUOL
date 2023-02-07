import { RequestHandler } from 'express'

export const getAllEvents: RequestHandler = (req, res) => {
  res.send('Ola sou um evento')
}
