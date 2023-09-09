import { UserRepository } from '@/repositories/user-repository'
import { User } from '../interfaces/IUser'

export class CreateUserService {
  async create(data: User) {
    const userRepo = new UserRepository()

    const userExists = await userRepo.findUserByUsername(data.username)

    if (userExists) {
      throw new Error('User already exists!!')
    }

    await userRepo.createUser(data)
  }
}
