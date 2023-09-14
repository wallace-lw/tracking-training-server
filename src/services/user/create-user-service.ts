import { UserRepository } from '@/repositories/user-repository'
import { AppError } from '@/errors/app-errors'
import { IUser } from '@/interfaces'

export class CreateUserService {
  async create(data: IUser) {
    const userRepo = new UserRepository()
    const userExists = await userRepo.findUserByUsername(data.username)

    if (userExists) {
      throw new AppError('User already exists')
    }

    await userRepo.createUser(data)
  }
}
