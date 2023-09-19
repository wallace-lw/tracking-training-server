type Exercises = {
  id: string
  name: string
  reps: number
  workoutId: string
}

type Workout = {
  id: string
  userId: string
  type: string
  title: string
  exercises: Exercises[]
}

export type UserDTO = {
  id: string
  username: string
  workouts: Workout[]
}
