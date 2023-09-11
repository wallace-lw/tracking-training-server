import { UserRepository } from '@/repositories/user-repository'

export class FindUserByIdService {
  async gettingUser(id: string) {
    const userRepo = new UserRepository()
    const response = await userRepo.findUserById(id)
    return response
  }
}
