import { Request, Response } from 'express'
import { FindUserByIdService } from '../services/FindUserByIdService'

export class FindUserbyIdController {
  async handle(request: Request, response: Response) {
    try {
      const findUserById = new FindUserByIdService()
      const { id } = request.params
      const user = await findUserById.gettingUser(id)
      response.status(200).send(user)
    } catch (error) {
      response.status(500).send({
        message: 'Somethings is wrong! Not able to perform the request.',
      })
    }
  }
}
