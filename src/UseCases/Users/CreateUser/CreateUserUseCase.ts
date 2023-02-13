import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { ICreateUserDTO } from './ICreateUserDTO'
import { User } from '../../../Entities/User'

export class CreateUserUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute (data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findUser(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data)
    await this.usersRepository.save(user)
  }
}
