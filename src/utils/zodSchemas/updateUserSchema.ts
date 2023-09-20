import { z } from 'zod'

export const updateUserSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
})
