import { WorkoutRepository } from '@/repositories/workout-repository'

export class FindManyWorkoutsService {
  async find(userId: string) {
    const workoutRepo = new WorkoutRepository()
    const workouts = await workoutRepo.findWorkouts(userId)

    return { workouts }
  }
}
