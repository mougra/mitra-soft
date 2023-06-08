import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import { postsApi } from '../store/posts/posts.api'
import { Row } from 'reactstrap'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import Search from '../components/Search'
import { useDebounce } from '../hooks/debounce'
import { useActions } from '../hooks/actions'

function Posts() {
  useEffect(() => {
    if (debounced !== '') {
      searchPosts({ page: page, search: debounced })
    } else fethPosts({})
  }, [])

  const [fethPosts, { data: posts, error, isLoading }] =
    postsApi.useLazyGetPostsQuery({})

  const paginateHandler = (page: number): void => {
    setPage(page)
    fethPosts({ page: page })
  }

  const [sortPosts, { data: sortPostsData, isLoading: isSortLoading }] =
    postsApi.useLazySortPostsQuery()
  const [searchPosts, { data: seacrhPostsData, isLoading: isSeacrhLoading }] =
    postsApi.useLazySearchPostsQuery()

  const [page, setPage] = useState(1)
  const [isSorted, setIsSorted] = useState<boolean>(false)

  // const { searchPosts } = useActions()
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)

  useEffect(() => {
    searchPosts({ page: page, search: debounced })
  }, [debounced])

  return (
    <>
      {isLoading && isSortLoading && isSeacrhLoading && (
        <div className='d-flex justify-content-center w-100 my-5'>
          <Spinner animation='border' />
        </div>
      )}

      <Container
        fluid='xl'
        className='d-flex flex-wrap gap-2 justify-content-start'
      >
        <Search
          page={page}
          sortPosts={sortPosts}
          isSorted={isSorted}
          setIsSorted={setIsSorted}
          search={search}
          setSearch={setSearch}
        />
        <Row className='align-items-stretch b-height '>
          {!debounced &&
            !isSorted &&
            posts &&
            posts.map((post) => <Post key={post.id} post={post} />)}
          {!debounced &&
            isSorted &&
            sortPostsData &&
            sortPostsData.map((post) => <Post key={post.id} post={post} />)}
          {debounced &&
            seacrhPostsData &&
            seacrhPostsData.map((post) => <Post key={post.id} post={post} />)}
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
