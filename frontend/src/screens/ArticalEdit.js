import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArticle } from '../actions/acticleActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ArticalForm from '../components/ArticalForm'
function ArticalEdit({ match }) {
  const id = match.params.id
  const article = useSelector(state => state.article)
  const { loading, articleDetails, error } = article

  const dispatch = useDispatch()

  useEffect(() => {
    if (!articleDetails || articleDetails.slug !== id) {
      dispatch(getArticle(id))
    }

    // eslint-disable-next-line
  }, [id])
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
              <>
                <h1>Edit Article</h1>
                <ArticalForm articleData={articleDetails} />
              </>
            )
      }
    </>
  )
}

export default ArticalEdit
