import { Request, Response } from 'express'
import { createUserSchema } from '../utils/zodSchemas/createUserSchema'
import { CreateUserService } from '@/services/create-user-service'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const createUserService = new CreateUserService()
      const data = createUserSchema.parse(request.body)
      await createUserService.create(data)

      return response.status(201).send('User created successfully!')
    } catch (error: any) {
      return response.status(400).json({ message: error.message })
    }
  }
}
