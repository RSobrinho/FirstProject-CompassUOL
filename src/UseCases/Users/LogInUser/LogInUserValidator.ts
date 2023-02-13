import { validate } from 'class-validator'
// import { User } from 'Entities/User'
import { Request, Response, NextFunction } from 'express'
import { User } from '../../../Entities/User'

export class LogInUserValidator {
  public async validator (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body
    const error = await validate((new User({ email, password })))

    if (error.length > 0) {
      return res.status(400).json({ status: 'LogIn Validation Failed', message: error[0].constraints })
    }

    next()
  }
}
