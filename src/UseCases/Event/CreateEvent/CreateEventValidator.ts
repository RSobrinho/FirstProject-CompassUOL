import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { Event } from '../../../Entities/Event'

export class CreateEventValidator {
  public async validator (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { description, dateTime } = req.body

    const error = await validate((new Event({ description, dateTime })))

    if (error.length > 0) {
      return res.status(200).json({ status: 'LogIn Validation Failed', message: error[0].constraints })
    }
    next()
  }
}
