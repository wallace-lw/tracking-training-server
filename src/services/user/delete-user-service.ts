import { UserRepository } from '@/repositories/user-repository'

export class DeleteUserService {
  async delete(id: string) {
    const userRepo = new UserRepository()

    await userRepo.deleteUser(id)
  }
}
