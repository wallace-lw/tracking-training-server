import { prisma } from '@/database'
import { WorkoutDTO } from '@/dtos/workout-dto'
import { IWorkoutImplementation } from '@/implementations/workout-implementation'
import { IWorkout } from '@/interfaces'

export class WorkoutRepository implements IWorkoutImplementation {
  async create({ title, userId, type }: Omit<IWorkout, 'id'>) {
    await prisma.workout.create({
      data: {
        title,
        userId,
        type,
      },
    })
  }

  async findWorkout(id: string): Promise<WorkoutDTO> {
    const workout = await prisma.workout.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        type: true,
        userId: true,
        exercises: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            reps: true,
          },
        },
      },
    })
    return workout as WorkoutDTO
  }

  async findWorkoutsByUserId(userId: string): Promise<WorkoutDTO[]> {
    const workouts = await prisma.workout.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        title: true,
        type: true,
        userId: true,
        exercises: {
          select: {
            name: true,
            reps: true,
          },
        },
      },
    })
    return workouts as WorkoutDTO[]
  }

  async findWorkouts(userId: string): Promise<WorkoutDTO[]> {
    const workouts = await prisma.workout.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        title: true,
        type: true,
        userId: true,
        exercises: {
          select: {
            name: true,
            reps: true,
          },
        },
      },
    })

    return workouts as WorkoutDTO[]
  }

  async deleteWorkout(id: string) {
    await prisma.workout.delete({
      where: {
        id,
      },
    })
  }

  async updateWorkout({
    id,
    title,
    type,
  }: Omit<IWorkout, 'userId'>): Promise<void> {
    await prisma.workout.update({
      where: {
        id,
      },
      data: {
        title,
        type,
      },
    })
  }
}
