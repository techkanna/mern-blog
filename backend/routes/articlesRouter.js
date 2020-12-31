import express from 'express'
import { createArticle, getArticles } from '../controllers/articleController.js'

const router = express.Router()

router
  .route('/')
  .get(getArticles)
  .post(createArticle)

export default router