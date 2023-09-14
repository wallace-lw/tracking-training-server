import { prisma } from '@/database'
import { IExercise } from '@/interfaces'
import { IExerciseRepository } from '@/interfaces/exercise-repository'

export class ExerciseRepository implements IExerciseRepository {
  async createExercise({ name, reps, workoutId }: IExercise): Promise<void> {
    await prisma.exercise.create({
      data: {
        name,
        reps,
        workoutId,
      },
    })
  }
}
