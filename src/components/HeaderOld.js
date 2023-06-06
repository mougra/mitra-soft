import React from 'react'

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const AVATAR =
  'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg'

const HeaderOld = () => (
  <header className='mb-5'>
    <Navbar
      color='light'
      light
      expand='xs'
      className='border-bottom border-gray bg-gray'
      style={{ height: 80 }}
    >
      <Container>
        <Row className='position-relative w-100 align-items-center'>
          <Col className='d-none d-lg-flex justify-content-start'>
            <Nav className='mrx-auto' navbar>
              <NavItem className='d-flex align-items-center'>
                <NavLink className='font-weight-bold' href='/'>
                  <img
                    src={AVATAR}
                    alt='avatar'
                    className='img-fluid rounded-circle'
                    style={{ width: 36 }}
                  />
                </NavLink>
              </NavItem>

              <NavItem className='d-flex align-items-center'>
                <NavLink className='font-weight-bold' href='/'>
                  Posts
                </NavLink>
              </NavItem>

              <NavItem className='d-flex align-items-center'>
                <NavLink className='font-weight-bold' href='/about-me'>
                  About me
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col className='d-none d-lg-flex justify-content-end'>
            <Form className='d-flex gap-4'>
              <Input
                type='search'
                className='mr-3'
                placeholder='Search React Courses'
              />
              <Button type='submit' color='info' outline>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
)

export default HeaderOld
