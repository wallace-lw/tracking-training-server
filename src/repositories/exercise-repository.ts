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

  async getExercise({ id }: IExercise): Promise<IExercise> {
    const response = await prisma.exercise.findUnique({
      where: {
        id,
      },
    })

    return response as IExercise
  }

  async getallExercises(): Promise<IExercise[]> {
    const response = await prisma.exercise.findMany()
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

  async deleteExercise({ id }: IExercise): Promise<void> {
    await prisma.exercise.delete({
      where: {
        id,
      },
    })
  }
}
