import { User } from '../interfaces/IUser'
import { prisma } from '../database'

export class UserRepository {
  async createUser(data: User) {
    await prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
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

  async findUser(id: string) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
