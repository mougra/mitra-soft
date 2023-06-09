import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import iconAvatar from '../assets/image/blackhole_96104.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import { commentsApi } from '../store/comments/comments.api'
import Comment from '../components/Comment'
import Spinner from 'react-bootstrap/Spinner'
import { IPost } from '../models/models'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface PostProps {
  post: IPost
  userPage?: boolean
}

function Post({ post, userPage = false }: PostProps) {
  const [fethComments, { data: comments, error, isLoading: loadingComments }] =
    commentsApi.useLazyGetCommentsQuery({})

  const commentsHandler = (id: number): void => {
    fethComments(id)
  }

  return (
    <>
      <Col
        className={
          userPage
            ? 'col-xxl-4 col-xl-6 col-md-6 col-sm-12 col-12 card-group mb-4 '
            : 'col-lg-4 col-sm-6 col-12 card-group mb-4 '
        }
      >
        <Card>
          <Card.Body>
            <Nav.Link as={Link} to={`/detail-user/${post.userId}`}>
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
            </Nav.Link>

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
