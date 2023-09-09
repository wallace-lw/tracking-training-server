import { User } from '../interfaces/IUser'
import { prisma } from '../database'

export class UserRepository {
  async createUser({ username, password }: User) {
    await prisma.user.create({
      data: {
        username,
        password,
      },
    })
  }

  async findUserByUsername(username: string) {
    return await prisma.user.findUnique({
      where: {
        username,
      },
    })
  }

  async findUserById(id: string) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async findAllUsers() {
    return await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        workouts: true,
        created_at: true,
      },
    })
  }
}
