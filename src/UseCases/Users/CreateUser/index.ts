import { MongoDBUserRepository } from '../../../Repositories/implementations/MongoDBUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'
import { CreateUserValidator } from './CreateUserValidator'

const createUserValidator = new CreateUserValidator()

const mongoDBUsersRepository = new MongoDBUserRepository()

const createUserUseCase = new CreateUserUseCase(mongoDBUsersRepository)

const createUserController = new CreateUserController(createUserUseCase)
export { createUserUseCase, createUserController, createUserValidator }
