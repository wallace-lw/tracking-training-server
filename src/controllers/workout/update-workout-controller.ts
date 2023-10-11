import { UpdateWorkoutService } from '@/services/workout/update-workout-service'
import { updateWorkoutSchema } from '@/utils/zodSchemas/updateWorkoutSchema'
import { Request, Response } from 'express'

export class UpdateWorkoutController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params
      const { type, title } = request.body

      const reqData = {
        id,
        type,
        title,
      }

      const data = updateWorkoutSchema.parse(reqData)
      const updateWorkout = new UpdateWorkoutService()

      await updateWorkout.update(data)

      return response.status(204).send('Workout updated successfully!')
    } catch (error) {}
  }
}
