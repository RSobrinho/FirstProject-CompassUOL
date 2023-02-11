import { validate, IsString, IsNotEmpty, IsDateString, IsDefined } from 'class-validator'
import { Response, Request, NextFunction } from 'express'

class EventValidator {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  private description: string

  @IsNotEmpty()
  @IsDateString()
  private dateTime: Date

  constructor (props?: object) {
    Object.assign(this, props)
  }

  public async validateEvent (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { description, dateTime } = req.body

      const error = await validate(new EventValidator({ description, dateTime }))

      if (error.length > 0) {
        return res.status(400).json(
          { status: 'SignIn Validation Failed', message: error[0].constraints })
      }
      next()
    } catch (err) {
      return res.status(500).json({ status: 'Failed', message: `Unexpected error: ${err}` })
    }
  }
}

export default EventValidator
