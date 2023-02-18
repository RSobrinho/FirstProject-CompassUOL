import { MongoDBUserRepository } from '../../../Repositories/implementations/MongoDBUserRepository'
import { LogInUserUseCase } from './LogInUserUseCase'
import { LogInUserController } from './LogInUserController'

const mongoDBUsersRepository = new MongoDBUserRepository()
const logInUserUseCase = new LogInUserUseCase(mongoDBUsersRepository)
const logInUserController = new LogInUserController(logInUserUseCase)

export { logInUserUseCase, logInUserController }
