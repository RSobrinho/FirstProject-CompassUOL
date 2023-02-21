import { MongoDBUserRepository } from '../../../Repositories/implementations/MongoDBUserRepository'
import { ResetUserPasswordUseCase } from './ResetUserPasswordUseCase'
import { ResetUserPasswordController } from './ResetUserPasswordController'

const mongoDBUsersRepository = new MongoDBUserRepository()
const resetUserPasswordUseCase = new ResetUserPasswordUseCase(mongoDBUsersRepository)
const resetUserPasswordController = new ResetUserPasswordController(resetUserPasswordUseCase)

export { resetUserPasswordUseCase, resetUserPasswordController }
