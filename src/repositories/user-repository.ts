import { IUser } from '../interfaces/IUser'
import { prisma } from '../database'

export class UserRepository {
  async createUser({ username, password }: IUser) {
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
      select: {
        workouts: {
          select: {
            exercises: true,
          },
        },
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
        createdAt: true,
        workouts: {
          select: {
            title: true,
            type: true,
            exercises: true,
          },
        },
      },
    })
  }
}
