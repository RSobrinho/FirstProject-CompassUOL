import { RequestHandler } from 'express'
import Event from '../models/eventsModel'

export const getAllEvents: RequestHandler = async (req, res) => {
  try {
    const allEvents = await Event.find()

    res.status(200).json({
      status: 'success',
      allEvents
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}

export const createEvent: RequestHandler = async (req, res) => {
  // aqui preciso verificar o tipo que me foi enviado de cada prop do json, e se nao bater retornar um not allowed (405 ou 500 sla), mas por enquanto vou deixar sem validacao de type pro createEvent
  try {
    const newEvent = await Event.create({
      description: req.body.description,
      dateTime: req.body.dateTime,
      createdAt: req.body.createdAt || new Date()
    })

    res.status(200).json({
      status: 'success',
      event: newEvent
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}

export const getEventById: RequestHandler = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)

    res.status(200).json({
      status:'success',
      event
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}