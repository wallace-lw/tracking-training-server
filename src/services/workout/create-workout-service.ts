import { IWorkout } from '@/interfaces'
import { WorkoutRepository } from '@/repositories/workout-repository'

export class CreateWorkoutService {
  async create(data: Omit<IWorkout, 'id'>) {
    const workoutRepo = new WorkoutRepository()
    await workoutRepo.create(data)
  }
}
