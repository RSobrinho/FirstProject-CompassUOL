import { MongoDBUserRepository } from '../../../Repositories/implementations/MongoDBUserRepository'
import { AuthenticationUseCase } from './AuthenticationUseCase'
import { AuthenticationController } from './AuthenticationController'

const mongoDBUsersRepository = new MongoDBUserRepository()
const authenticationUseCase = new AuthenticationUseCase(mongoDBUsersRepository)
const authenticationController = new AuthenticationController(authenticationUseCase)

export { authenticationUseCase, authenticationController }
