import { IWorkout } from './IWorkout'

export interface IUser {
  id: string
  username: string
  password: string
  workouts?: IWorkout[]
  createdAt?: string
}
