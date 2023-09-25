import { IExercise } from './IExercise'

export interface IWorkout {
  id: string
  title: string
  type: string
  exercises?: IExercise[]
  userId: string
}
