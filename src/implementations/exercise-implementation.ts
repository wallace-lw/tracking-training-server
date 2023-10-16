import { IExercise } from '../interfaces/IExercise'

export interface IExerciseImplementation {
  createExercise(data: IExercise): Promise<void>
  getAllExercises({ workoutId }: IExercise): Promise<IExercise[]>
  getExercise(id: string): Promise<IExercise>
  updateExercise({ id, name, reps }: IExercise): Promise<void>
  deleteExercise(id: string): Promise<void>
}
