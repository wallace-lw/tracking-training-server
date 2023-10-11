import { FindManyWorkoutsService } from '@/services/workout/find-many-workouts-service'
import { Request, Response } from 'express'

export class FindManyWorkoutsController {
  async handle(request: Request, response: Response) {
    const workout = new FindManyWorkoutsService()
    const { userId } = request.params
    const workouts = await workout.find(userId)

    return response.status(200).json(workouts)
  }
}
