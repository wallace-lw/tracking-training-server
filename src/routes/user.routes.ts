import { Router } from 'express'
import {
  CreateUserController,
  FindAllUsersController,
  FindUserbyIdController,
} from '@/controllers/user'
import { UpdateUserController } from '@/controllers/user/update-user-controller'

export const userRoutes = Router()
const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserById = new FindUserbyIdController()
const updateUser = new UpdateUserController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', findAllUsersController.handle)
userRoutes.get('/:id', findUserById.handle)
userRoutes.put('/:id', updateUser.handle)
