import { Request, Response } from 'express'
import { FindAllUsersService } from '@/services/user'

export class FindAllUsersController {
  async handle(request: Request, response: Response) {
    const findAllUsers = new FindAllUsersService()
    const users = await findAllUsers.search()

    return response.status(200).send(users)
  }
}
