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
    })
  }

  async findUserById(id: string) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        username: true,
        id: true,
        createdAt: true,
        workouts: {
          select: {
            id: true,
            userId: true,
            type: true,
            title: true,
            exercises: true,
          },
        },
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
