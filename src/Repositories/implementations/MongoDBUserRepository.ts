import { IUserRepository } from '../Interfaces/IUserRepository'
import { User } from '../../Entities/User'
import UserSchema from '../Schemas/UserSchema'
import { hash, compare } from 'bcrypt'
export class MongoDBUserRepository implements IUserRepository {
  async save (user: User): Promise<void> {
    user.passwordChangedAt = this.updatePasswordChangedAt()
    await UserSchema.create(user)
  }

  async findUser (email: string): Promise<User> {
    return await UserSchema.findOne({ email })
  }

  async logInUser (email: string, password: string): Promise<User> {
    return await UserSchema.findOne({ email, password })
  }

  async findUserById (id: string): Promise<User> {
    return await UserSchema.findById(id)
  }

  async encrypt (password: string): Promise<string> {
    password = await hash(password, 12)
    return password
  }

  async comparePass (candidatePass: string, hashedPass: string): Promise<boolean> {
    return await compare(candidatePass, hashedPass)
  }

  updatePasswordChangedAt (): Date {
    return (Date.now() - 1000) as unknown as Date
  }

  changePasswordAfter (JWTTimestamp: number, passwordChangedAt: Date): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const changedTimestamp = parseInt(passwordChangedAt.getTime() / 1000, 10)
    return JWTTimestamp < changedTimestamp
  }

  async updatePassword (id: string, password: string): Promise<void> {
    const user = await this.findUserById(id)

    user.passwordChangedAt = this.updatePasswordChangedAt()
    user.password = await this.encrypt(password)

    await UserSchema.findByIdAndUpdate(id, user)
  }
}
