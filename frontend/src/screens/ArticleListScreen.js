import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listArticles } from '../actions/acticleActions'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ArticalCard from '../components/ArticalCard'
import { deleteArticle } from '../actions/acticleActions'

function ArticleListScreen() {

  const articles = useSelector(state => state.articles)
  const { loading, articleList, error } = articles

  const articleDelete = useSelector(state => state.articleDelete)
  const { success } = articleDelete

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listArticles())
    // eslint-disable-next-line
  }, [success])

  const deleteArticleHandler = (id) => {
    dispatch(deleteArticle(id))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
          error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
              <>
                <h1 className="mt-4">Blog Articles</h1>
                <Link to="/article/new" className="btn btn-success mt-2">New Article</Link>
                {articleList.map((article) => {
                  return <ArticalCard key={article._id} article={article} deleteArticleHandler={deleteArticleHandler} />
                })}
              </>
            )
        )
      }
    </>
  )
}

export default ArticleListScreen
