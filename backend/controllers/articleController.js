import Article from '../models/article.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all articles
// @route   GET /api/articles
// @access  Public
export const getArticles = asyncHandler(async (req, res) => {

  const articles = await Article.find()

  res.json(articles)
})

// @desc    Create new article
// @route   POST /api/articles
// @access  Public
export const createArticle = asyncHandler(async (req, res) => {

  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  })

  try {
    const createdArtical = await article.save()
    res.json(createdArtical)
  } catch (error) {
    throw new Error(error)
  }
})