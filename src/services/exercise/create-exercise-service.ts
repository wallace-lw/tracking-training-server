import { IExercise } from '@/interfaces'
import { ExerciseRepository } from '@/repositories/exercise-repository'

export class CreateExerciseService {
  async create(data: Omit<IExercise, 'id'>) {
    const exercise = new ExerciseRepository()

    await exercise.createExercise(data)
  }
}
