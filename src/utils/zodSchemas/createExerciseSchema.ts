import { z } from 'zod'

export const createExerciseSchema = z.object({
  workoutId: z.string(),
  name: z.string(),
  reps: z.number(),
})
