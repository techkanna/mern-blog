import express from 'express'
import {
  createArticle,
  getArticles,
  getArticle,
  removeArticle,
  updateArticle
} from '../controllers/articleController.js'

const router = express.Router()

router
  .route('/')
  .get(getArticles)
  .post(createArticle)

router
  .route('/:id')
  .get(getArticle)
  .put(updateArticle)
  .delete(removeArticle)

export default router