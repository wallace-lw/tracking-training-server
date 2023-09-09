import { Request, Response } from 'express'
import { FindAllUsersService } from '../services/find-all-user-service'

export class FindAllUsersController {
  async handle(request: Request, response: Response) {
    const findAllUsers = new FindAllUsersService()
    const users = await findAllUsers.perform()
    response.status(200).send(users)
  }
}
