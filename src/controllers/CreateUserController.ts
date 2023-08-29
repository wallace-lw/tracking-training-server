import { Request, Response } from 'express'
import { createUserSchema } from '../utils/zodSchemas/createUserSchema'
import { CreateUserService } from '@/services/CreateUserService'
import { UserRepository } from '@/repositories/UserRepository'
export class CreateUserController {
  async create(request: Request, response: Response) {
    const createUserService = new CreateUserService()
    const userRepo = new UserRepository()

    const data = createUserSchema.parse(request.body)
    const userExists = await userRepo.findUserByUsername(data.username)

    if (userExists) {
      response.status(400).send('User already exists')
    }

    await createUserService.create(data)

    response.status(201).send('User created successfully!')
  }
}
