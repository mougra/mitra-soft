import React from 'react'
import Post from '../components/Post'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import { postsApi } from '../store/posts/posts.api'
import { IPost } from '../models/models'
import Header from '../components/Header'
import { Row } from 'reactstrap'

function Posts() {
  // const dispatch = useDispatch()
  // const users = useSelector((state: any) => state.users.users)
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  const { data: posts, error, isLoading } = postsApi.useGetPostsReposQuery('')

  // const [fetchRepos, { isLoading: areReposLoading, data: posts }] =
  //   useLazyGetPostsReposQuery()

  return (
    <div className='other'>
      <Header />
      {isLoading && (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
      <Container
        fluid='xl'
        // expand={'xl'}
        className='d-flex flex-wrap gap-5 justify-content-start '
      >
        <Row className='align-items-stretch b-height '>
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </Row>
      </Container>
    </div>
  )
}

export default Posts
