import { IUserRepository } from '../interfaces'
import { prisma } from '../database'

export class UserRepository implements IUserRepository {
  async createUser(username: string, password: string) {
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
        id: true,
        username: true,
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
        workouts: {
          select: {
            id: true,
            title: true,
            type: true,
            exercises: true,
          },
        },
      },
    })
  }
}
