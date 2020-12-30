import express from 'express'
import articlesRouter from './routes/articles/articlesRouter.js'
const app = express()

app.use(express.json())

app.use('/api/articles', articlesRouter)

app.use('/', (req, res) => {
  res.send('api running...')
})

const PORT = process.env.PORT || 9900
app.listen(PORT, () => console.log(`server started on port: ${PORT}`))