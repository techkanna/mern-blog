import React from 'react'
import { Card, Button } from 'react-bootstrap'
function ArticalCard({ article }) {

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
        <Button className="my-2 mr-2" href={`articles/${article.slug}`}>Read More</Button>
        <Button variant="info" className="m-2" href={`articles/${article._id}`}>Edit</Button>
        <Button className="m-2" variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default ArticalCard
