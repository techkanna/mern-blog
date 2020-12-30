import express from 'express'
const router = express.Router()
import articles from '../../data/testData.js'

router
  .route('/')
  .get((req, res) => {

    res.json(articles)
  })

export default router