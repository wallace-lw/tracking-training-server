import { IUser } from '@/interfaces'
import { UserRepository } from '@/repositories/user-repository'

export class UpdateUserService {
  async update(data: IUser) {
    const userRepo = new UserRepository()
    await userRepo.updateUser(data)
  }
}
