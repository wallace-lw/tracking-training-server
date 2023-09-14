import { IExercise } from './IExercise'

export interface IExerciseRepository {
  createExercise({ name, reps }: IExercise): Promise<void>
}
