import { FindManyWorkoutsService } from '@/services/workout/find-many-workouts-service'
import { Request, Response } from 'express'

export class FindManyWorkoutsController {
  async handle(request: Request, response: Response) {
    const workout = new FindManyWorkoutsService()
    const workouts = await workout.find()

    return response.status(200).json(workouts)
  }
}
