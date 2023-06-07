import React, { useEffect } from 'react'
import { IComment } from '../models/models'
import Image from 'react-bootstrap/Image'
import iconAvatar from '../assets/image/2772505.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface CommentProps {
  comment: IComment
}

function Comment({ comment }: CommentProps) {
  return (
    <>
      <Row>
        <Col xs={3} md={2}>
          <Image src={iconAvatar} width='25px' height='25px' rounded />
        </Col>
        <Col xs={9} md={10}>
          <h5 className=''>{comment.email}</h5>
        </Col>
      </Row>

      <div className='pb-3 mb-3 border-bottom'>{comment.body}</div>
    </>
  )
}

export default Comment
