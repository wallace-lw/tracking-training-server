import { WorkoutRepository } from '@/repositories/workout-repository'

export class DeleteWorkoutService {
  async delete(id: string) {
    const workoutRepo = new WorkoutRepository()
    await workoutRepo.deleteWorkout(id)
  }
}
