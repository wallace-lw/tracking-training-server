import { Router } from 'express'
import { CreateExerciseController } from '@/controllers/exercise/create-exercise-controller'

export const exercisesRoutes = Router()

const createExerciseController = new CreateExerciseController()

exercisesRoutes.post('/', createExerciseController.handle)
