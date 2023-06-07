import React, { useEffect } from 'react'
import { IComment, IPost } from '../models/models'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import iconAvatar from '../assets/image/blackhole_96104.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'reactstrap'
import Accordion from 'react-bootstrap/Accordion'
import { commentsApi } from '../store/comments/comments.api'
import Comment from '../components/Comment'
import Spinner from 'react-bootstrap/Spinner'

interface PostProps {
  post: IPost
}

function Post({ post }: PostProps) {
  const [fethComments, { data: comments, error, isLoading: loadingComments }] =
    commentsApi.useLazyGetCommentsQuery({})

  const commentsHandler = (id: number): void => {
    fethComments(id)
  }

  return (
    <>
      <Col className='col-lg-4 col-sm-6 col-12 card-group mb-4 '>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={8} md={9}>
                <Card.Title>{post.title}</Card.Title>
              </Col>
              <Col xs={4} md={3}>
                <Image
                  src={iconAvatar}
                  width='64px'
                  height='64px'
                  roundedCircle
                />
              </Col>
            </Row>
            <Card.Text>{post.body}</Card.Text>
            <Accordion flush className='border border-info'>
              <Accordion.Item
                onClick={() => commentsHandler(post.id)}
                eventKey='0'
              >
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body>
                  {loadingComments && <Spinner animation='border' />}
                  {comments &&
                    comments.map((comment) => (
                      <Comment key={comment.id} comment={comment} />
                    ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Post
