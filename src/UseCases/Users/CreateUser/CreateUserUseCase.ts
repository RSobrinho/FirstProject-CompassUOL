import { IUserRepository } from '../../../Repositories/IUserRepository'
import { ICreateUserDTO } from './ICreateUserDTO'
import { User } from '../../../Entities/User'
import { userValidator } from '.'

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

    await userValidator.createUserValidator(user)

    await this.usersRepository.save(user)
  }
}
