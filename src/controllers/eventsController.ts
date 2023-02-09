import { RequestHandler } from 'express'
import Event from './../models/eventsModel'

export const createEvent: RequestHandler = async (req, res) => {
  try {
    const date = new Date(req.body.dateTime)
    const isValid = !isNaN(Date.parse(date as any))
    const length = req.body.description.length

    if(length < 10) throw `Description too short, minimum 10 characters, got ${length}`
    if(!isValid) throw 'Invalid dateTime'

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

export const getEvents: RequestHandler = async (req, res) => {
  try {
    const dayChosen = parseInt(req.query.dayOfTheWeek as string) // dps validar se é string
    const events = isNaN(dayChosen) ? await Event.find() : (await Event.find()).filter(obj => (obj.dateTime).getDay() === dayChosen)

    if(events.length === 0) throw 'No events found to get'

    res.status(200).json({
      status: 'success',
      events
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}

export const deleteEvents: RequestHandler = async (req, res) => {
  try {
    const dayChosen = parseInt(req.query.dayOfTheWeek as string) // dps validar se é string
    let qtdEventsDeleted = 0

    if(isNaN(dayChosen)) {
      const events = await Event.find()

      if(events.length === 0) throw 'No events found to delete'

      qtdEventsDeleted = events.length

      await Event.deleteMany({})
      
    } else {
      const events = (await Event.find()).filter(obj => (obj.dateTime).getDay() === dayChosen)
      qtdEventsDeleted = events.length

      if(events.length === 0) throw 'No events found (weekday search) to delete'

      events.forEach(async (event) => {
        await Event.deleteOne({ dateTime: event.dateTime})
      })
    }

    res.status(200).json({
      status: 'success',
      message: `${qtdEventsDeleted} was deleted successfully`  
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
    // check if event is nullerxists, and if it is, modify status
    const event = await Event.findById(req.params.id)

    if(!event) throw 'Event not found'

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

export const deleteEventById: RequestHandler = async (req, res) => {
  try {
    // check if event is nullerxists, and if it is, modify status
    const deleted = await Event.findByIdAndDelete(req.params.id)

    if(!deleted) throw 'Event not found (to delete)'

    res.status(200).json({
      status:'success',
      message: `The event with id ${req.params.id} was deleted successfully`
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}

export const updateEventById: RequestHandler = async (req, res) => {
  try {
    const date = new Date(req.body.dateTime)
    const isValid = !isNaN(Date.parse(date as any))
    const length = req.body.description.length

    if(length < 10) throw `Description too short, minimum 10 characters, got ${length}`
    if(!isValid) throw 'Invalid dateTime'

    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if(!event) throw 'Event not found (to update)'

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