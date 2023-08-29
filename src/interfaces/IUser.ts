import { Workout } from './IWorkout'

export interface User {
  username: string
  password: string
  workouts?: Workout[]
  created_at?: string
}
