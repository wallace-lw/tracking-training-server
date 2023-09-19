import { IExercise } from '../interfaces/IExercise'

export interface IExerciseImplementation {
  createExercise(data: IExercise): Promise<void>
  getallExercises(): Promise<IExercise[]>
  getExercise({ id }: IExercise): Promise<IExercise>
  updateExercise({ id }: IExercise): Promise<void>
  deleteExercise({ id }: IExercise): Promise<void>
}
