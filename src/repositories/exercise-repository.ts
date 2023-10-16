import { prisma } from '@/database'
import { IExercise } from '@/interfaces'
import { IExerciseImplementation } from '@/implementations/'

export class ExerciseRepository implements IExerciseImplementation {
  async createExercise({
    name,
    reps,
    workoutId,
  }: Omit<IExercise, 'id'>): Promise<void> {
    await prisma.exercise.create({
      data: {
        name,
        reps,
        workoutId,
      },
    })
  }

  async getExercise(id: string): Promise<IExercise> {
    const response = await prisma.exercise.findUnique({
      where: {
        id,
      },
    })

    return response as IExercise
  }

  async getAllExercises({ workoutId }: IExercise): Promise<IExercise[]> {
    const response = await prisma.exercise.findMany({
      where: {
        workoutId,
      },
    })
    return response as IExercise[]
  }

  async updateExercise({ id, name, reps }: IExercise): Promise<void> {
    await prisma.exercise.update({
      where: {
        id,
      },
      data: {
        name,
        reps,
      },
    })
  }

  async deleteExercise(id: string): Promise<void> {
    await prisma.exercise.delete({
      where: {
        id,
      },
    })
  }
}
