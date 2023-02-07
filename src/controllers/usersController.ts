import { RequestHandler } from 'express'

export const getAllUsers: RequestHandler = (req, res) => {
  res.send('Ola sou um usuario')
}

