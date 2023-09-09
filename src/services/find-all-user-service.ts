import { UserRepository } from '@/repositories/user-repository'

export class FindAllUsersService {
  async perform() {
    const userRepo = new UserRepository()
    const users = await userRepo.findAllUsers()
    return { users }
  }
}