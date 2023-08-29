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

  async getAllUsers() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        created_at: true,
        workouts: true,
      },
    })
    return { users }
  }

  async findUser(id: string) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
