import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { ILogInUserDTO } from './ILogInUserDTO'
import { User } from '../../../Entities/User'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Error/ValidationError'
import { sign } from 'jsonwebtoken'

export class LogInUserUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: ILogInUserDTO) {
    const { email, password } = new User(data)
    const error = await validate({ email, password })

    if (error.length > 0) {
      throw new ValidationError(error[0].constraints)
    }

    const userExists = await this.usersRepository.findUser(email)

    if (!userExists || !(await this.usersRepository.comparePass(password, userExists.password))) {
      throw new ValidationError({ incorrectDataError: 'Incorrect email or password' })
    }

    const { _id } = userExists

    return sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
  }
}
