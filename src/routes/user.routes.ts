import { Router } from 'express'
import {
  CreateUserController,
  FindAllUsersController,
  FindUserbyIdController,
} from '@/controllers/user'
import { UpdateUserController } from '@/controllers/user/update-user-controller'
import { DeleteUserController } from '@/controllers/user/delete-user-controller'

export const userRoutes = Router()
const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserById = new FindUserbyIdController()
const updateUser = new UpdateUserController()
const deleteUser = new DeleteUserController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', findAllUsersController.handle)
userRoutes.get('/:id', findUserById.handle)
userRoutes.put('/:id', updateUser.handle)
userRoutes.delete('/:id', deleteUser.handle)
