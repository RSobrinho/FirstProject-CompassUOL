import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { ILogInUserDTO } from './ILogInUserDTO'
import { User } from '../../../Entities/User'
import { validate } from 'class-validator'
import { ValidationError } from '../../../Utils/ErrorHandler/ValidationError'
import { encrypt } from '../../../Utils/Encrypt'
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

    const encryptedPass = await encrypt({ password })

    const userExists = await this.usersRepository.logInUser(email, encryptedPass)

    if (!userExists) {
      throw new ValidationError({ userExistenceError: 'User with this E-Mail and Password not found' })
    }
  }
}
