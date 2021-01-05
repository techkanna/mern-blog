import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { createArticle } from '../actions/acticleActions'
import Message from '../components/Message'
import { ARTICLE_CREATE_RESET } from '../constants/articleConstands'

function ArticalForm() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [markdown, setMarkdown] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const articleCreate = useSelector((state) => state.articleCreate)
  const { loading, error, artical } = articleCreate

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createArticle({ title, description: desc, markdown }))
  }

  useEffect(() => {
    if (artical) {
      dispatch({ type: ARTICLE_CREATE_RESET })
      history.push(`/articles/${artical.slug}`)
    }
    // eslint-disable-next-line
  }, [artical, history])

  return (
    <Form onSubmit={submitHandler}>
      {error && (
        <Message variant="danger">{error}</Message>
      )}
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Markdown</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e) => setMarkdown(e.target.value)}
          rows={3}
          required
        />
      </Form.Group>

      <Link to="/" className="btn btn-light mr-2 cancel-btn">
        Cancel
      </Link>
      <Button variant="info" type="submit" disabled={loading}>
        Submit
      </Button>
    </Form>
  )
}

export default ArticalForm
