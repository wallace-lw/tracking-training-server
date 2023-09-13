import { UserRepository } from '@/repositories/user-repository'
import { AppError } from '@/errors/app-errors'

export class CreateUserService {
  async create(username: string, password: string) {
    const userRepo = new UserRepository()
    const userExists = await userRepo.findUserByUsername(username)

    if (userExists) {
      throw new AppError('User already exists')
    }

    await userRepo.createUser(username, password)
  }
}
