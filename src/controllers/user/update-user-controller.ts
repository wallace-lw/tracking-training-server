import { AppError } from '@/errors/app-errors'
import { UpdateUserService } from '@/services/user/update-user-service'
import { updateUserSchema } from '@/utils/zodSchemas/updateUserSchema'
import { Request, Response } from 'express'

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params
      const { username, password } = request.body

      const reqData = {
        id,
        username,
        password,
      }
      const data = updateUserSchema.parse(reqData)
      const updateUserService = new UpdateUserService()
      return response.status(204).send('User updated successfully!')
      await updateUserService.update(data)
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message })
      }
      return response.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
