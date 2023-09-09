import { UserRepository } from '@/repositories/user-repository'
import { IUser } from '../../interfaces/IUser'
import { AppError } from '@/errors/app-errors'

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
