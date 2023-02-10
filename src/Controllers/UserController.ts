import { Request, Response } from 'express'
import User from '../Schemas/UserSchema'

class UserController {
  public async signUp (req: Request, res: Response): Promise<Response | void> {
    const { firstName, lastName, birthDate, city, country, email, password, confirmPassword } = req.body
    await User.create(req.body)

    res.status(200).json({ status: 'Success', message: 'User created successfully' })
  }

  public async signIn (req: Request, res: Response): Promise<Response | void> {
    const existingUser = await User.findOne({ email: req.body.email, password: req.body.password })

    if (!existingUser) {
      return res.status(401).json({ message: 'Email or password is incorrect' })
    }

    res.status(200).json({
      status: 'Success',
      message: 'User logged in successfully'
    })
  }
}

export default new UserController()
