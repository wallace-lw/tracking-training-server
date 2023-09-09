import { CreateWorkoutController } from '@/controllers/workout/create-workout-controller'
import { Router } from 'express'

export const workoutRoutes = Router()

const createWorkoutController = new CreateWorkoutController()

workoutRoutes.post('/', createWorkoutController.handle)
