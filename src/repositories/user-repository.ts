import { prisma } from '../database'
import { UserDTO } from '@/dtos/user-dto'
import { IUserImplementation } from '@/implementations'
import { IUser } from '@/interfaces'

export class UserRepository implements IUserImplementation {
  async createUser({ username, password }: Omit<IUser, 'id'>): Promise<void> {
    await prisma.user.create({
      data: {
        username,
        password,
      },
    })
  }

  async findUserByUsername(username: string): Promise<UserDTO> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })
    return user as unknown as UserDTO
  }

  async findUserById(id: string): Promise<UserDTO> {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        workouts: {
          select: {
            id: true,
            title: true,
            type: true,
            exercises: true,
            userId: true,
          },
        },
      },
    })
    return response as UserDTO
  }

  async findAllUsers(): Promise<UserDTO[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        workouts: {
          select: {
            id: true,
            title: true,
            type: true,
            exercises: true,
            userId: true,
          },
        },
      },
    })

    return users as UserDTO[]
  }
}
