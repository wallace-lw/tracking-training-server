import { IExercise } from '@/interfaces'
import { ExerciseRepository } from '@/repositories/exercise-repository'

export class GetExerciseService {
  async find(id: string): Promise<IExercise> {
    const exerciseRepo = new ExerciseRepository()
    return exerciseRepo.getExercise(id)
  }
}
