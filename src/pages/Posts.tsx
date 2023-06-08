import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import { postsApi, useFetchAllPostsQuery } from '../store/posts/posts.api'
import { Row } from 'reactstrap'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import Search from '../components/Search'
import { useDebounce } from '../hooks/debounce'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import Header from '../components/Header'

function Posts() {
  const { searchedPosts } = useAppSelector((state) => state.posts)

  const [fethPosts, { data: posts, error, isLoading }] =
    postsApi.useLazyGetPostsQuery({})

  const paginateHandler = (page: number): void => {
    setPage(page)
    if (!debounced) {
      fethPosts({ page: page })
    }
  }

  const [sortPosts, { data: sortPostsData, isLoading: isSortLoading }] =
    postsApi.useLazySortPostsQuery()

  const {
    isLoading: isLoadingAllPosts,
    error: isErrorAllPosts,
    data: AllPosts,
  } = useFetchAllPostsQuery('posts')

  const [page, setPage] = useState(1)
  const [isSorted, setIsSorted] = useState<boolean>(false)

  const { searchPosts } = useActions()
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)

  useEffect(() => {
    fethPosts({})
  }, [])

  let pageTotal = debounced
    ? searchedPosts
      ? searchedPosts.length / 9
      : 1
    : AllPosts
    ? AllPosts.length / 9
    : 1

  // let searchedPostsPaginate = searchedPosts.slice(page - 1 * 9, 9)

  useEffect(() => {
    if (AllPosts && debounced) {
      searchPosts({ data: AllPosts, search: debounced })
    }
  }, [debounced])

  return (
    <>
      <Header />
      {isLoading && isSortLoading && isLoadingAllPosts && (
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
            searchedPosts.length > 0 &&
            searchedPosts
              .slice((page - 1) * 9, page * 9)
              .map((post) => <Post key={post.id} post={post} />)}
          {debounced && searchedPosts.length === 0 && (
            <div className='mx-auto w-75 fs-3'>
              Усп. Кажется такого заголовка поста не сущесвтует. Только без
              паники!
            </div>
          )}
        </Row>
        <div className='mx-auto mb-5 d-flex justify-content-center'>
          <PaginationControl
            page={page}
            between={3}
            total={pageTotal}
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
