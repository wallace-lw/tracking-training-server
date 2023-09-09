import { IWorkout } from './IWorkout'

export interface IUser {
  username: string
  password: string
  workouts?: IWorkout[]
  createdAt?: string
}
