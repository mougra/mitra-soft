import React, { useEffect } from 'react'
import { IPost } from '../models/models'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import iconAvatar from '../assets/image/icon-avatar.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'reactstrap'

interface PostProps {
  post: IPost
}

function Post({ post }: PostProps) {
  return (
    <>
      {/* <Container fluid> */}
      <Col className='col-md-4 card-group mb-4 '>
        <Card>
          <Card.Body>
            <Row>
              <Col sm={8}>
                <Card.Title>{post.title}</Card.Title>
              </Col>
              <Col sm={2}>
                <Image
                  src={iconAvatar}
                  width='64px'
                  height='64px'
                  roundedCircle
                />
              </Col>
            </Row>
            <Card.Text>{post.body}</Card.Text>
            <Button variant='primary'>Comments</Button>
          </Card.Body>
        </Card>
        {/* </Container> */}
      </Col>
    </>
  )
}

export default Post
