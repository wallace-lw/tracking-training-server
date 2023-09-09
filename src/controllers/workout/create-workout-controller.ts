import { CreateWorkoutService } from '@/services/workout'
import { createWorkoutSchema } from '@/utils/zodSchemas/createWorkoutSchema'
import { Response, Request } from 'express'

export class CreateWorkoutController {
  async handle(request: Request, response: Response) {
    const workoutService = new CreateWorkoutService()

    const data = createWorkoutSchema.parse(request.body)

    await workoutService.create(data)
    response.status(201).send('Workout created! Enjoy your gains.')
  }
}
