import { prisma } from '@/database'
import { IWorkout } from '@/interfaces'

export class WorkoutRepository {
  async create({ title, userId, type }: IWorkout) {
    await prisma.workout.create({
      data: {
        title,
        userId,
        type,
      },
    })
  }

  async findWorkout(id: string) {
    return await prisma.workout.findUnique({
      where: {
        id,
      },
    })
  }
}
