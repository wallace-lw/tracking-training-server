import { IUser } from '../interfaces'
import { prisma } from '../database'
import { UserDTO } from '@/dtos/user-dto'
import { IUserImplementation } from '@/implementations'

export class UserRepository implements IUserImplementation {
  async createUser({ username, password }: IUser): Promise<void> {
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

  async findUserById({ id }: IUser): Promise<UserDTO> {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return response as UserDTO
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
