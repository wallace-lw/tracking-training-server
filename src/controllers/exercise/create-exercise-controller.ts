import { AppError } from '@/errors/app-errors'
import { CreateExerciseService } from '@/services/exercise/create-exercise-service'
import { createExerciseSchema } from '@/utils/zodSchemas/createExerciseSchema'
import { Request, Response } from 'express'

export class CreateExerciseController {
  async handle(request: Request, response: Response) {
    try {
      const createExerciseService = new CreateExerciseService()
      const data = createExerciseSchema.parse(request.body)

      await createExerciseService.create(data)
      return response.status(201).send('Exercise created successfully')
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).send(error.message)
      }

      return response.status(500).send('Internal server error')
    }
  }
}
