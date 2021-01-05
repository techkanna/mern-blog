import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getArticle } from '../actions/acticleActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


function ArticalScreen({ match }) {
  const id = match.params.id

  const article = useSelector(state => state.article)
  const { loading, articleDetails, error } = article

  const dispatch = useDispatch()

  useEffect(() => {
    if (!articleDetails || articleDetails.slug !== id) {
      dispatch(getArticle(id))
    }
  }, [articleDetails, id, dispatch])
  useEffect(() => {
    dispatch(getArticle(id))
    // eslint-disable-next-line
  }, [])
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
              <>
                <h1 className="mb-1">{articleDetails.title}</h1>
                <div className="text-muted mb-2">
                  {new Date(articleDetails.createdAt).toLocaleString().slice(0, -3)}
                </div>
                <Link to="/" className="btn btn-primary mr-3">All Articles</Link>
                <Link to={`/article/edit/${articleDetails.slug}`} className="btn btn-info">Edit</Link>

                <div className="overflow-auto mt-5 shadow-sm p-3 bg-white rounded" dangerouslySetInnerHTML={{ __html: articleDetails.sanitizedHtml }}>
                </div>
              </>
            )
      }
    </>
  )
}

export default ArticalScreen
