import { AppError } from '@/errors/app-errors'
import { DeleteWorkoutService } from '@/services/workout/delete-workout-service'
import { Request, Response } from 'express'

export class DeleteWorkoutController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params
      const deleteWorkout = new DeleteWorkoutService()
      await deleteWorkout.delete(id)
      return response.status(204).send('User deleted')
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message })
      }
      return response.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
