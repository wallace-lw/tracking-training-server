import { IExercise } from '../interfaces/IExercise'

export interface IExerciseImplementation {
  createExercise({ name, reps, workoutId }: IExercise): Promise<void>
  getExercise({ id }: IExercise): Promise<IExercise>
  updateExercise({ id }: IExercise): Promise<void>
  getallExercises(): Promise<IExercise[]>
  deleteExercise({ id }: IExercise): Promise<void>
}
