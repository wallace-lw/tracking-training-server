import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'
import { FindAllUsersController } from '@/controllers/FindAllUsersController'
import { FindUserbyIdController } from '@/controllers/FindUserByIdController'

export const userRoutes = Router()
const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserById = new FindUserbyIdController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', findAllUsersController.handle)
userRoutes.get('/:id', findUserById.handle)
