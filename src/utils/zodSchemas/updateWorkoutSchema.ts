import { z } from 'zod'

export const updateWorkoutSchema = z.object({
  id: z.string(),
  type: z.string(),
  title: z.string(),
})
