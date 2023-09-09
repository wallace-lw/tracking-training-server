import { Router } from 'express'
import {
  CreateUserController,
  FindAllUsersController,
  FindUserbyIdController,
} from '@/controllers/user'

export const userRoutes = Router()
const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserById = new FindUserbyIdController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', findAllUsersController.handle)
userRoutes.get('/:id', findUserById.handle)
