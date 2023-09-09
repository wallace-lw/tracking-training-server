import { Request, Response } from 'express'
import { createUserSchema } from '@/utils/zodSchemas/createUserSchema'
import { CreateUserService } from '@/services/user'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserService = new CreateUserService()
    const data = createUserSchema.parse(request.body)
    await createUserService.create(data)

    return response.status(201).send('User created successfully!')
  }
}
