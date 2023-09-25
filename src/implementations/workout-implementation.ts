import { WorkoutDTO } from '@/dtos/workout-dto'
import { IWorkout } from '@/interfaces'

export interface IWorkoutImplementation {
  create({ title, userId, type }: IWorkout): Promise<void>
  findWorkout(id: string): Promise<WorkoutDTO>
  findWorkoutsByUserId(userId: string): Promise<WorkoutDTO[]>
  findWorkouts(userId: string): Promise<WorkoutDTO[]>
  deleteWorkout(id: string): Promise<void>
  updateWorkout({ id, title, type }: IWorkout): Promise<void>
}
