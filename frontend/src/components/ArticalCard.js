import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ArticalCard({ article, deleteArticleHandler }) {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(article.createdAt).toLocaleString().slice(0, -3)}
        </Card.Subtitle>
        <Card.Text>
          {article.description}
        </Card.Text>
        <Link to={`articles/${article.slug}`} className="btn btn-dark my-2 mr-2">Read More</Link>
        <Link to={`article/${article._id}`} className="btn btn-info m-2">Edit</Link>
        <Button onClick={() => deleteArticleHandler(article._id)} className="m-2" variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default ArticalCard
