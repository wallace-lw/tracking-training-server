import { IExercise } from './IExercise'

export interface IExerciseRepository {
  createExercise({ name, reps, workoutId }: IExercise): Promise<void>
}
