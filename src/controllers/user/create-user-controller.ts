import { Request, Response } from 'express'
import { createUserSchema } from '@/utils/zodSchemas/createUserSchema'
import { CreateUserService } from '@/services/user'
import { AppError } from '@/errors/app-errors'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const createUserService = new CreateUserService()
      const data = createUserSchema.parse(request.body)
      await createUserService.create(data)

      return response.status(201).send('User created successfully!')
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message })
      }
      return response.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
