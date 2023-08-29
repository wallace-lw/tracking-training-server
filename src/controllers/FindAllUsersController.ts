import { Request, Response } from 'express'
import { FindAllUsersService } from '../services/FindAllUsersService'

export class FindAllUsersController {
  async handle(request: Request, response: Response) {
    try {
      const findAllUsers = new FindAllUsersService()
      const users = await findAllUsers.perform()
      response.status(200).send(users)
    } catch (error: unknown) {
      response.status(500).json(error)
    }
  }
}
