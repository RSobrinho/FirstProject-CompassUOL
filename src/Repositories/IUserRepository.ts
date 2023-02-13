import { User } from '../Entities/User'

export interface IUserRepository {
  save(user: User): Promise<void>, // save the created user to database,
  findUser(email: string): Promise<User>,
  logInUser(email: string, password: string): Promise<User>
}
