import { Workout } from './IWorkout'

export interface User {
  name: string
  username: string
  password: string
  workouts?: Workout[]
}
