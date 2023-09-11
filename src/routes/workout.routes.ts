import { FindWorkoutByIdController } from '@/controllers/workout'
import { CreateWorkoutController } from '@/controllers/workout/create-workout-controller'
import { FindManyWorkoutsController } from '@/controllers/workout/find-many-workouts-controller'
import { Router } from 'express'

export const workoutRoutes = Router()

const createWorkoutController = new CreateWorkoutController()
const findWorkoutById = new FindWorkoutByIdController()
const findWorkouts = new FindManyWorkoutsController()

workoutRoutes.post('/', createWorkoutController.handle)
workoutRoutes.get('/:id', findWorkoutById.handle)
workoutRoutes.get('/', findWorkouts.handle)
