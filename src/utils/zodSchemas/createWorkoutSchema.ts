import { z } from 'zod'

export const createWorkoutSchema = z.object({
  title: z.string(),
  userId: z.string(),
  type: z.string(),
})
