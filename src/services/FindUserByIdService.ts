import { UserRepository } from '@/repositories/UserRepository'

export class FindUserByIdService {
  async gettingUser(id: string) {
    const userRepo = new UserRepository()
    const user = userRepo.findUserById(id)
    return { user }
  }
}
