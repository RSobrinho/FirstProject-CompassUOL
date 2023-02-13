import { validate } from 'class-validator'
// import { User } from 'Entities/User'
import { Request, Response, NextFunction } from 'express'
import { User } from '../../../Entities/User'

export class CreateUserValidator {
  public async validator (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password, confirmPassword, birthDate, firstName, lastName, city, country } = req.body
    const error = await validate((new User({ email, password, confirmPassword, birthDate, firstName, lastName, city, country })))

    if (error.length > 0) {
      return res.status(200).json({ status: 'CreateUser Validation Failed', message: error[0].constraints })
    }

    next()
  }
}
