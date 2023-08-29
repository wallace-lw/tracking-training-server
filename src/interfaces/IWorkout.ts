import { Exercise } from './IExercise'

export interface Workout {
  title: string
  type: string
  exercises?: Exercise[]
}
