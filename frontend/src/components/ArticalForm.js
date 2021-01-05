import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { createArticle, articleUpdateAction } from '../actions/acticleActions'
import Message from '../components/Message'
import { ARTICLE_CREATE_RESET, ARTICLE_UPDATE_RESET } from '../constants/articleConstands'

function ArticalForm({ articleData }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [markdown, setMarkdown] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const articleCreate = useSelector((state) => state.articleCreate)
  const { loading, error, artical } = articleCreate

  const articleUpdate = useSelector((state) => state.articleUpdate)
  const { error: updateError, articalUpdated } = articleUpdate

  const submitHandler = (e) => {
    e.preventDefault()
    if (articleData) {
      dispatch(articleUpdateAction({ _id: articleData._id, title, description: desc, markdown }))
    } else {
      dispatch(createArticle({ title, description: desc, markdown }))
    }
  }

  useEffect(() => {
    if (artical.slug || articalUpdated.slug) {
      history.push(`/articles/${articalUpdated.slug ? articalUpdated.slug : artical.slug}`)
      dispatch({ type: ARTICLE_CREATE_RESET })
      dispatch({ type: ARTICLE_UPDATE_RESET })
    }

    if (articleData) {
      setTitle(articleData.title)
      setDesc(articleData.description)
      setMarkdown(articleData.markdown)
    }
  }, [artical, history, dispatch, articleData, articalUpdated])


  return (
    <Form onSubmit={submitHandler}>
      {error && (
        <Message variant="danger">{error}</Message>
      )}
      {updateError && (
        <Message variant="danger">{updateError}</Message>
      )}
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          value={desc}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Markdown</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e) => setMarkdown(e.target.value)}
          rows={3}
          value={markdown}
          required
        />
      </Form.Group>

      <Link to="/" className="btn btn-light mr-2 cancel-btn">
        Cancel
      </Link>
      <Button variant="info" type="submit" disabled={loading}>
        Save
      </Button>
    </Form>
  )
}

export default ArticalForm
