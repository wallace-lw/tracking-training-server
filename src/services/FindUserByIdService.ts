import { UserRepository } from '@/repositories/UserRepository'

export class FindUserByIdService {
  async gettingUser(id: string) {
    const userRepo = new UserRepository()
    const user = await userRepo.findUserById(id)
    console.log(user)
    return { user }
  }
}
