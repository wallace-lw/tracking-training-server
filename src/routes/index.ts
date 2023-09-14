import { Router } from 'express'
import { userRoutes } from './user.routes'
import { workoutRoutes } from './workout.routes'
import { exercisesRoutes } from './exercise.routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/workouts', workoutRoutes)
router.use('/exercises', exercisesRoutes)

export { router }
