import Express from 'express'

const app = Express()

const port = 5000

app.use(Express.json())

app.get('/', (request, response) => response.status(200).send('Hello World!'))

app.listen(port, () => console.log(`Server running on port ${port}`))
