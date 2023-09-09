import { Request, Response } from 'express'
import { FindUserByIdService } from '../services/find-user-by-id-service'

export class FindUserbyIdController {
  async handle(request: Request, response: Response) {
    const findUserById = new FindUserByIdService()
    const { id } = request.params
    const user = await findUserById.gettingUser(id)
    response.status(200).send(user)
  }
}
