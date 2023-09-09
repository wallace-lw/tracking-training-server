import { Router } from 'express'
import { userRoutes } from './user.routes'
import { workoutRoutes } from './workout.routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/workouts', workoutRoutes)

export { router }
