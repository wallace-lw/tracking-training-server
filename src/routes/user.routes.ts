import { Router } from 'express'
import { CreateUserController } from '@/controllers/create-user-controller'
import { FindAllUsersController } from '@/controllers/find-all-users-controller'
import { FindUserbyIdController } from '@/controllers/find-user-by-id-conrtroller'

export const userRoutes = Router()
const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserById = new FindUserbyIdController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', findAllUsersController.handle)
userRoutes.get('/:id', findUserById.handle)
