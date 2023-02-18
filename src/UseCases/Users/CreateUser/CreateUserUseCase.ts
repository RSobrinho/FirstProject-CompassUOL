import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { ICreateUserDTO } from './ICreateUserDTO'
import { User } from '../../../Entities/User'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Utils/ErrorHandler/ValidationError'
export class CreateUserUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: ICreateUserDTO) {
    const { email, password, confirmPassword, birthDate, firstName, lastName, city, country } = new User(data)

    const error = await validate({ email, password, confirmPassword, birthDate, firstName, lastName, city, country })

    if (error.length > 0) {
      const errors = error[0].constraints
      throw new ValidationError(errors)
    }

    if (await this.usersRepository.findUser(data.email)) {
      throw new ValidationError({ userExistenceError: 'User already exists.' })
    }

    const user = new User(data)
    await this.usersRepository.save(user)
  }
}
