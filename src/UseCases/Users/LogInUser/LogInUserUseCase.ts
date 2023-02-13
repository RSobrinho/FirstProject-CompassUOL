import { IUserRepository } from '../../../Repositories/IUserRepository'
import { ILogInUserDTO } from './ILogInUserDTO'

export class LogInUserUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: ILogInUserDTO) {
    const userExists = await this.usersRepository.logInUser(data.email, data.password)

    if (!userExists) {
      throw new Error('Email or password incorrect.')
    }

    return userExists
  }
}
