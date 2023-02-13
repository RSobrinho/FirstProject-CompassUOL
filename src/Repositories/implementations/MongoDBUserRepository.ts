import { IUserRepository } from '../IUserRepository'
import { User } from '../../Entities/User'
import UserSchema from '../Schemas/UserSchema'

export class MongoDBUserRepository implements IUserRepository {
  async save (user: User): Promise<void> {
    await UserSchema.create(user)
  }

  async findUser (email: string): Promise<User> {
    return await UserSchema.findOne({ email })
  }

  async logInUser (email: string, password: string): Promise<User> {
    return await UserSchema.findOne({ email, password })
  }
}
