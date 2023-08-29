import Express from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { prisma } from './database'

const app = Express()
const port = 5000

const createUserController = new CreateUserController()

app.get('/', (request, response) =>
  response.status(200).send({ message: 'Oi' }),
)

app.post('/create-user', createUserController.create)

app.get('/users')

app.listen(port, () => console.log(`Server running on port ${port}`))
