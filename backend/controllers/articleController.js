import Article from '../models/article.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all articles
// @route   GET /api/articles
// @access  Public
export const getArticles = asyncHandler(async (req, res) => {

  const articles = await Article.find().sort({ createdAt: 'desc' })

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

// @desc    Get article
// @route   GET /api/articles/:id
// @access  Public
export const getArticle = asyncHandler(async (req, res) => {

  const article = await Article.where('slug', req.params.id)

  if (article) {
    res.json(article)
  } else {
    res.status(404)
    throw new Error('Article not found')
  }
})

// @desc    Delete article
// @route   DELETE /api/articles/:id
// @access  Public
export const removeArticle = asyncHandler(async (req, res) => {

  const article = await Article.findById(req.params.id)

  if (article) {
    await article.remove()
    res.json({ message: 'Article removed' })
  } else {
    res.status(404)
    throw new Error('Article not found')
  }
})