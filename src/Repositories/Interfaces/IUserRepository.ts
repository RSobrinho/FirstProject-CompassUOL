import { User } from '../../Entities/User'

export interface IUserRepository {
  save(user: User): Promise<void>, // save the created user to database,
  findUser(email: string): Promise<User>,
  logInUser(email: string, password: string): Promise<User>,
  findUserById(id: string): Promise<User>,
  encrypt (password: string): Promise<string>,
  comparePass (candidatePass: string, hashedPass: string): Promise<boolean>,
  updatePasswordChangedAt(): Date,
  changePasswordAfter(JWTTimestamp: number, passwordChangedAt: Date): boolean,
  updatePassword(id: string, password: string): Promise<void>
}
