import { IExercise } from '@/interfaces'
import { ExerciseRepository } from '@/repositories/exercise-repository'

export class CreateExerciseService {
  async create(data: IExercise) {
    const exercise = new ExerciseRepository()
    await exercise.createExercise(data)
  }
}
