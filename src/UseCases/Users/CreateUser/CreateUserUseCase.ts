import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { ICreateUserDTO } from './ICreateUserDTO'
import { User } from '../../../Entities/User'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Error/ValidationError'
import { sign } from 'jsonwebtoken'

import { config } from 'dotenv'
config()

export class CreateUserUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: ICreateUserDTO) {
    const newUser = new User(data)
    const error = await validate(newUser)

    if (error.length > 0) {
      throw new ValidationError(error[0].constraints)
    }

    if (newUser.password !== data.confirmPassword) {
      throw new ValidationError({ confirmPasswordError: 'Password and confirmPassword are not the same' })
    }

    if (await this.usersRepository.findUser(newUser.email)) {
      throw new ValidationError({ userExistenceError: 'User already exists.' })
    }

    newUser.password = await this.usersRepository.encrypt(newUser.password)
    data.confirmPassword = undefined

    await this.usersRepository.save(newUser)

    const { _id } = newUser

    return sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
  }
}
