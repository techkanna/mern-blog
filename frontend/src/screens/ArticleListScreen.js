import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listArticles } from '../actions/acticleActions'
import { Button } from 'react-bootstrap'

import Loader from '../components/Loader'
import Message from '../components/Message'
import ArticalCard from '../components/ArticalCard'

function ArticleListScreen() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles)

  const { loading, articleList, error } = articles

  useEffect(() => {
    dispatch(listArticles())
  }, [dispatch])
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
                <Button href="/articles/new" variant="success" className="mt-2">New Article</Button>
                {articleList.map((article) => {
                  return <ArticalCard key={article._id} article={article} />
                })}
              </>
            )
        )
      }
    </>
  )
}

export default ArticleListScreen
