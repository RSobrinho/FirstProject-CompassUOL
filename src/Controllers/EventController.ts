import { Request, Response } from 'express'
import Event from '../Schemas/EventSchema'
import { validate, IsString, IsDateString, IsNotEmpty } from 'class-validator'

class EventController {
  @IsNotEmpty()
  @IsString()
  private description: string

  @IsNotEmpty()
  @IsDateString()
  private dateTime: Date

  constructor (description?: string, dateTime?: Date) {
    this.description = description
    this.dateTime = dateTime
  }

  public async createEvent (req: Request, res: Response): Promise<Response | void> {
    const { description, dateTime } = req.body
    const instanceEvent = new EventController(description, dateTime)

    validate(instanceEvent).then((error) => {
      if (error.length > 0) {
        res.status(400).json({ status: 'Validation Failed', message: error[0].constraints })
      }
    })

    const newEvent = await Event.create(instanceEvent)
    return res.status(200).json(
      { status: 'Success', message: 'Event created successfully', newEvent }
    )
  }

  public async getEvents (req: Request, res: Response): Promise<Response | void> {
    const dayChosen = parseInt(req.query.dayOfTheWeek as string) // after, valid if the day is in string format ou number format
    const events = isNaN(dayChosen) ? await Event.find() : (await Event.find()).filter(obj => (obj.dateTime).getDay() === dayChosen)

    if (events.length === 0) {
      return res.status(404).json({ status: 'Failed', message: 'Events not found' })
    }

    return res.status(200).json(
      { status: 'Success', message: 'Event found successfully', events }
    )
  }

  public async deleteEvents (req: Request, res: Response): Promise<Response | void> {
    const dayChosen = parseInt(req.query.dayOfTheWeek as string)
    let qtdEventsDeleted = 0

    if (isNaN(dayChosen) || dayChosen < 0 || dayChosen > 6) {
      res.status(400).json({ status: 'Failed', message: 'Invalid number day' })
    } else {
      const events = (await Event.find()).filter(obj => (obj.dateTime).getDay() === dayChosen)
      qtdEventsDeleted = events.length

      if (events.length === 0) {
        res.status(404).json({ status: 'Failed', message: 'No events found' })
      }

      events.forEach(async (event) => {
        await Event.deleteOne({ dateTime: event.dateTime })
      })
    }

    res.status(200).json({
      status: 'Success',
      message: `${qtdEventsDeleted} successfully deleted`
    })
  }

  public async getEventById (req: Request, res: Response): Promise<Response | void> {
    const event = await Event.findById(req.params.id)
    if (!event) {
      res.status(404).json({ status: 'Failed', message: 'Event not found to update' })
    }
    res.status(200).json(
      { status: 'Success', message: 'Event updated successfully', event }
    )
  }

  public async deleteEventById (req: Request, res: Response): Promise<Response | void> {
    const deleted = await Event.findByIdAndDelete(req.params.id)

    if (!deleted) {
      res.status(404).json({ status: 'Failed', message: 'Event not found to delete' })
    }

    res.status(200).json({
      status: 'Success',
      message: `Event with id ${req.params.id} was deleted successfully`
    })
  }

  public async updateEventById (req: Request, res: Response): Promise<Response | void> {
    const { description, dateTime } = req.body

    const instance = new EventController(description, dateTime)

    validate(instance).then((error) => {
      if (error.length > 0) {
        res.status(400).json({ status: 'Validation Failed', message: error[0].constraints })
      }
    })

    const event = await Event.findByIdAndUpdate(req.params.id, instance, { new: true })

    if (!event) {
      res.status(404).json({ status: 'Failed', message: 'Event not found to update' })
    }
    res.status(200).json({ status: 'Success', message: `Event with id ${req.params.id} was updated successfully}`, event })
  }
}

export default new EventController()
