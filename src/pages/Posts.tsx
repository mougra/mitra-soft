import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import { postsApi } from '../store/posts/posts.api'
import { IPost, Size } from '../models/models'
import Header from '../components/Header'
import { Row } from 'reactstrap'
// import Pagination from 'react-bootstrap/Pagination'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useWindowSize } from '../hooks/resize'

function Posts() {
  useEffect(() => {
    fethPosts({})
  }, [])

  const [fethPosts, { data: posts, error, isLoading }] =
    postsApi.useLazyGetPostsQuery({})

  const paginateHandler = (page: number): void => {
    setPage(page)
    fethPosts({ page: page })
  }

  const [page, setPage] = useState(1)

  return (
    <>
      {isLoading && (
        <div className='d-flex justify-content-center w-100 my-5'>
          <Spinner animation='border' />
        </div>
      )}

      <Container
        fluid='xl'
        // expand={'xl'}
        className='d-flex flex-wrap gap-4 justify-content-start '
      >
        <Row className='align-items-stretch b-height '>
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </Row>
        <div className='mx-auto mb-5'>
          <PaginationControl
            page={page}
            between={3}
            // в API нету данных по пагинации, не грузить все посты разом
            total={12}
            limit={1}
            changePage={(pageNumber) => paginateHandler(pageNumber)}
            ellipsis={2}
          />
        </div>
      </Container>
    </>
  )
}

export default Posts
