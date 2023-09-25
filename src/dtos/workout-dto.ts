type Exercises = {
  name: string
  reps: number
}

export type WorkoutDTO = {
  id: string
  title: string
  type: string
  exercises: Exercises[]
  userId: string
}
