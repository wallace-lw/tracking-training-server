import { UserRepository } from '@/repositories/UserRepository'
import { User } from '../interfaces/IUser'

export class CreateUserService {
  async create(data: User) {
    const userRepo = new UserRepository()
    await userRepo.createUser(data)
  }
}
