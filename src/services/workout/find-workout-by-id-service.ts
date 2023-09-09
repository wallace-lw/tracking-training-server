import { AppError } from '@/errors/app-errors'
import { WorkoutRepository } from '../../repositories/workout-repository'

export class FindWorkoutByIdService {
  async find(id: string) {
    const workoutRepo = new WorkoutRepository()

    const existingId = await workoutRepo.findWorkout(id)

    if (!existingId) {
      throw new AppError('Workout does not exist')
    }

    const workout = await workoutRepo.findWorkout(id)

    return { workout }
  }
}
