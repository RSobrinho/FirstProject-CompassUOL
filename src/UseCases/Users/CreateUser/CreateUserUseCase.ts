import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { ICreateUserDTO } from './ICreateUserDTO'
import { User } from '../../../Entities/User'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Utils/ErrorHandler/ValidationError'
import { sign } from 'jsonwebtoken'
import { encrypt } from '../../../Utils/Encrypt'

import { config } from 'dotenv'
config()

export class CreateUserUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: ICreateUserDTO) {
    const { _id, email, password, birthDate, firstName, lastName, city, country } = new User(data)

    const error = await validate({ email, password, birthDate, firstName, lastName, city, country })

    if (error.length > 0) {
      const errors = error[0].constraints
      throw new ValidationError(errors)
    }

    if (password !== data.confirmPassword) {
      throw new ValidationError({ confirmPasswordError: 'Password and confirmPassword are not the same' })
    }

    if (await this.usersRepository.findUser(email)) {
      throw new ValidationError({ userExistenceError: 'User already exists.' })
    }

    await this.usersRepository.save({ _id, email, password, birthDate, firstName, lastName, city, country })

    return sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
  }
}
