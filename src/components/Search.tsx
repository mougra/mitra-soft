import React, { useEffect } from 'react'
import { IComment } from '../models/models'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useLazySearchPostsQuery } from '../store/posts/posts.api'
import { postsApi } from '../store/posts/posts.api'

interface SearchProps {
  page: number
  sortPosts(page: any): void
  isSorted: boolean
  setIsSorted(page: any): void
}

// { comment }: CommentProps
function Search({ page, sortPosts, isSorted, setIsSorted }: SearchProps) {
  const [searchPosts, { data: searchPostsData }] =
    postsApi.useLazySearchPostsQuery()

  const SortHandler = (): void => {
    console.log('SortHandler')
    sortPosts({ page: page })
    setIsSorted((prev: any) => !prev)
  }
  const SearchHandler = (): void => {
    console.log('FilterHandler')
    // searchPosts({})
  }

  return (
    <Container fluid='xl' className='d-flex justify-content-center px-0 w-100'>
      <Row className='d-flex flex-column flex-wrap justify-content-between w-100 flex-sm-row'>
        <Col className='mb-3 col-lg-4 col-sm-8 col-12 px-0'>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Enter title'
              className='me-2'
              aria-label='Search'
              // value={value}
            />
            <Button
              className='px-4'
              variant='outline-success'
              onClick={() => SearchHandler()}
            >
              Search
            </Button>
          </Form>
        </Col>
        <Col className='d-flex justify-content-end mb-3 px-0'>
          <Button
            className='px-4 align-self-start'
            variant={isSorted ? 'outline-success' : 'outline-danger'}
            onClick={() => SortHandler()}
          >
            Sort posts
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
