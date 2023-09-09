import { FindWorkoutByIdController } from '@/controllers/workout'
import { CreateWorkoutController } from '@/controllers/workout/create-workout-controller'
import { Router } from 'express'

export const workoutRoutes = Router()

const createWorkoutController = new CreateWorkoutController()
const findWorkoutById = new FindWorkoutByIdController()

workoutRoutes.post('/', createWorkoutController.handle)
workoutRoutes.get('/:id', findWorkoutById.handle)
