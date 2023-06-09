import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Header from '../components/Header'
import { useGetUserQuery } from '../store/users/user.api'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import iconAvatar from '../assets/image/2636225.png'
import { useGetUserPostsQuery } from '../store/posts/posts.api'
import Post from '../components/Post'
import { Spinner } from 'react-bootstrap'

function DetailsUser() {
  const params = useParams<'id'>()
  let navigate = useNavigate()

  const {
    isLoading: isLoading,
    error: isError,
    data: user,
  } = useGetUserQuery(String(params.id))

  const {
    isLoading: isLoadingPosts,
    error: isErrorPosts,
    data: userPosts,
  } = useGetUserPostsQuery(Number(params.id))

  return (
    <>
      <Header />
      {isError && isErrorPosts && (
        <p className='d-flex justify-content-center w-100 my-5'>
          Something went wrong ...
        </p>
      )}
      {isLoading && isLoadingPosts && (
        <div className='d-flex justify-content-center w-100 my-5'>
          <Spinner animation='border' />
        </div>
      )}
      <Container fluid='xl'>
        <Row>
          <Col className='col-xxl-3 col-lg-3 col-sm-4 col-12'>
            <h3 className='w-100 my-4'>
              <Button
                onClick={() => navigate(-1)}
                variant='dark fs-5 px-4 mx-3'
              >
                &#x2039;
              </Button>
              Back
            </h3>
            <Card>
              <Card.Img variant='top' src={iconAvatar} />
              <Card.Body>
                <Card.Title>{user?.username}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {user?.name}
                </Card.Subtitle>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>{user?.website}</ListGroup.Item>
                <ListGroup.Item>{user?.company.name}</ListGroup.Item>
                <ListGroup.Item>{user?.phone}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>{user?.email}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col-xxl-9 col-lg-9 col-sm-8 col-12'>
            {' '}
            <div className=''>
              <div className='fs-3 my-4'>{`All ${user?.username} posts`}</div>
              <Row className='align-items-stretch b-height '>
                {userPosts &&
                  userPosts.map((post) => (
                    <Post key={post.id} post={post} userPage={true} />
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DetailsUser
