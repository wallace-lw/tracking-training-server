import { Router } from 'express'
import { FindWorkoutByIdController } from '@/controllers/workout'
import { CreateWorkoutController } from '@/controllers/workout/create-workout-controller'
import { FindManyWorkoutsController } from '@/controllers/workout/find-many-workouts-controller'
import { UpdateWorkoutController } from '@/controllers/workout/update-workout-controller'
import { DeleteWorkoutController } from '@/controllers/workout/delete-workout-controller'

export const workoutRoutes = Router()

const createWorkoutController = new CreateWorkoutController()
const findWorkoutById = new FindWorkoutByIdController()
const findWorkouts = new FindManyWorkoutsController()
const updateWorkout = new UpdateWorkoutController()
const deleteWorkout = new DeleteWorkoutController()

workoutRoutes.post('/', createWorkoutController.handle)
workoutRoutes.get('/:id', findWorkoutById.handle)
workoutRoutes.get('/', findWorkouts.handle)
workoutRoutes.put('/:id', updateWorkout.handle)
workoutRoutes.delete('/:id', deleteWorkout.handle)
