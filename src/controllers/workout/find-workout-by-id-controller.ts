import { FindWorkoutByIdService } from '@/services/workout'
import { Request, Response } from 'express'

export class FindWorkoutByIdController {
  async handle(request: Request, response: Response) {
    const findWorkoutById = new FindWorkoutByIdService()
    const { id } = request.params
    const workout = await findWorkoutById.find(id)

    return response.status(200).send(workout)
  }
}
