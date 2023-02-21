import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { IResetUserPasswordDTO } from './IResetUserPasswordDTO'
import { User } from '../../../Entities/User'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Error/ValidationError'
// import { sign } from 'jsonwebtoken'
import { NotFoundError } from '../../../Error/NotFoundError'

// import { config } from 'dotenv'
// config()

export class ResetUserPasswordUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: IResetUserPasswordDTO) {
    const { _id, password } = data
    console.log(_id)

    const newUser = new User({ password }, _id)

    console.log(_id, password, 'bct', newUser)

    const error = await validate({ password })

    if (error.length > 0) {
      throw new ValidationError(error[0].constraints)
    }

    // if (newUser.password !== data.confirmPassword) {
    //   throw new ValidationError({ confirmPasswordError: 'Password and confirmPassword are not the same' })
    // }

    const user = await this.usersRepository.updatePassword(_id, password)
    // if (!user) {
    //   throw new NotFoundError('user')
    // }

    // user.password = await this.usersRepository.encrypt(password)

    // await this.usersRepository.save(user)

    // return sign({ _id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN
    // })
  }
}
