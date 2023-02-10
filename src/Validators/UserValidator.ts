import { validate, IsEmail, IsString, IsStrongPassword, IsNotEmpty, IsDateString } from 'class-validator'
import { Response, Request, NextFunction } from 'express'

class UserValidator {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  private email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  private password: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  private confirmPassword: string

  @IsNotEmpty()
  @IsDateString()
  private birthDate: Date

  @IsNotEmpty()
  @IsString()
  private firstName: string

  @IsNotEmpty()
  @IsString()
  private lastName: string

  @IsNotEmpty()
  @IsString()
  private city: string

  @IsNotEmpty()
  @IsString()
  private country: string

  constructor (firstName?, lastName?, birthDate?, city?, country?, email?, password?, confirmPassword?) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthDate = birthDate
    this.city = city
    this.country = country
    this.email = email
    this.password = password
    this.confirmPassword = confirmPassword
  }

  public async valSignUp (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const error = await validate(new UserValidator(req.body))
      const { firstName, lastName, birthDate, city, country, email, password, confirmPassword } = new UserValidator(req.body)

      if (error.length > 0) {
        return res.status(400).json(
          { status: 'SignUp Validation Failed', message: error[0].constraints })
      }
      next()
    } catch (err) {
      return res.status(500).json({ status: 'Failed', message: `Unexpected error: ${err}` })
    }
  }

  public async valSignIn (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      if ((Object.keys(req.body)).length !== 2 || !req.body.email || !req.body.password) {
        return res.status(400).json(
          { status: 'SignIn Validation Failed', message: 'Invalid signIn, please put just email and password' })
      }

      const { email, password } = new UserValidator(req.body)
      const error = await validate({ email, password })

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
export default UserValidator
