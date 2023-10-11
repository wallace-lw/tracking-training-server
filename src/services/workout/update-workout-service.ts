import { IWorkout } from '@/interfaces'
import { WorkoutRepository } from '@/repositories/workout-repository'

export class UpdateWorkoutService {
  async update(data: Omit<IWorkout, 'userId'>) {
    const workoutRepo = new WorkoutRepository()
    await workoutRepo.updateWorkout(data)
  }
}
