import { IExercise } from './IExercise'

export interface IWorkout {
  title: string
  type: string
  exercises?: IExercise[]
}
