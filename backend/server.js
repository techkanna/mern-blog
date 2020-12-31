import express from 'express'
import articlesRouter from './routes/articlesRouter.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/articles', articlesRouter)


if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()

  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 9900
app.listen(PORT, () => console.log(`server started on port: ${PORT}`))