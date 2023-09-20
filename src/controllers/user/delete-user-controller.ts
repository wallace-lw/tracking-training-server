import { DeleteUserService } from '@/services/user/delete-user-service'
import { Request, Response } from 'express'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService()
    const { id } = request.params
    await deleteUserService.delete(id)
    return response.status(204).send('User deleted')
  }
}
