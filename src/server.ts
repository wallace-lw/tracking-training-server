/* eslint-disable @typescript-eslint/no-unused-vars */
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import { AppError } from './errors/app-errors'

const app = express()
const port = 5000

app.use(express.json())

app.use(router)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal Server Error - ${error.message}`,
    })
  },
)

app.listen(port, () => console.log(`Server running on port ${port}`))
