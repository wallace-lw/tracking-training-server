import { WorkoutRepository } from '@/repositories/workout-repository'

export class FindManyWorkoutsService {
  async find() {
    const workoutRepo = new WorkoutRepository()
    const workouts = await workoutRepo.findWorkouts()

    return { workouts }
  }
}
