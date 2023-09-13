import { Request, Response } from 'express'
import { FindUserByIdService } from '@/services/user'
import { AppError } from '@/errors/app-errors'

export class FindUserbyIdController {
  async handle(request: Request, response: Response) {
    try {
      const findUserById = new FindUserByIdService()

      const { id } = request.params

      if (!id) {
        return response.status(400).send({
          message: 'Id is required',
        })
      }

      const user = await findUserById.gettingUser(id)
      if (!user) return response.status(404).send({ message: 'User not found' })

      return response.status(200).send(user)
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message })
      }
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
