import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import myAvatar from '../assets/image/my-avatar.jpg'
import headerLogo from '../assets/meteor-rain.gif'
import { Link } from 'react-router-dom'

const AVATAR =
  'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg'

const Header = () => (
  <header className='mb-4'>
    <Navbar bg='white border-bottom border-dark' expand={'lg'} className='mb-3'>
      <Container fluid='xl'>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
        <Nav.Link className='fs-4' as={Link} to='/mitra-soft'>
          <Image src={headerLogo} width='70px' height='70px' rounded />
        </Nav.Link>

        <Navbar.Brand className='fs-3 mx-3' as={Link} to='/mitra-soft'>
          Hi there
        </Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar`}
          aria-labelledby={`offcanvasNavbarLabel`}
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Row className='align-items-center flex-wrap'>
              <Col className='mb-3'>
                <Image src={myAvatar} width='100px' height='100px' rounded />
              </Col>
              <Col>
                <Offcanvas.Title className='fs-3'>Egor</Offcanvas.Title>
                <Offcanvas.Title className='fs-5 text-info'>
                  <Nav.Link className='fs-4' href='mailto:mougraaa@gmail.com'>
                    mougraaa@gmail.com
                  </Nav.Link>
                </Offcanvas.Title>
              </Col>
            </Row>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link className='fs-4' as={Link} to='/mitra-soft'>
                Posts
              </Nav.Link>
              <Nav.Link className='fs-4' as={Link} to='/about-me'>
                About me
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </header>
)

export default Header
