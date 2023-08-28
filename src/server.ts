import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from '../prisma/connect/client'

const app = fastify()

app.get('/users', async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      password: true,
      created_at: true,
      workouts: true,
    },
  })

  return { users }
})

app.post('/create-user', async (request, reply) => {
  const createUserSchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = createUserSchema.parse(request.body)
  try {
    await prisma.user.create({
      data: {
        username,
        password,
      },
    })

    return reply.status(201).send('Usuário criado com sucesso!')
  } catch (error) {
    return reply.status(500).send()
  }
})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log(
      `Server Running on http://localhost:${process.env.PORT || 3333} ⚡`,
    )
  })
