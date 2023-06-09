import React from 'react'
import Header from '../components/Header'
import Image from 'react-bootstrap/Image'
import iconAvatar from '../assets/image/cv-photo.png'
import { Container } from 'react-bootstrap/'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import calendar from '../assets/image/calendar.png'
import piano from '../assets/image/piano.png'
import rickandmorty from '../assets/image/rickandmorty.png'
import filter from '../assets/image/filter.png'
import table from '../assets/image/table.png'

function AboutMe() {
  return (
    <>
      <Header />
      <Container fluid='md'>
        <Row className='d-flex flex-column  flex-wrap flex-sm-row mb-4 '>
          <Col className='d-flex justify-content-center col-lg-4 col-sm-5 col-12'>
            <Image
              className='mb-3'
              src={iconAvatar}
              width='220px'
              height='330px'
              rounded
            />
          </Col>
          <Col className='col-lg-8 col-sm-7 col-12 text-center text-sm-start'>
            <div className='fs-1 fw-bold'>Егор Антропов</div>
            <div className='fs-2 border-bottom pb-2 mb-4'>
              Front-end developer
            </div>
            <div className='fs-5'>
              Занимаюсь Front-end разработкой более 2 лет, На данный момент
              работаю над проектами на фрилансе, а также над различными
              алгоритмическими задачами, тасками и пет-проектами (github). Люблю
              работать над интересными сложными задачами, развивать свои навыки.
              В работе провожу аналитику задач, осваиваю новые технологии и
              инструменты. Для меня очень важно чувствовать, что ты и твоя
              команда делаете полезную работу, улучшаешь жизнь людей и бизнеса,
              используя передовые технологии.
            </div>
          </Col>
        </Row>
        <div className='fs-5'>
          <div className='mb-3 '>
            <span className='fw-bold'> Высшее образование: </span>
            ИжГТУ им. М.Т. Калашникова - 2017
            <br />
            Информатика и вычислительная техника, Вычислительные машины,
            комплексы, системы и сети
          </div>
          <div className='mb-3'>
            <span className='fw-bold'>Профессиональные навыки:</span> JavaScript
            (ES6), HTML5, CSS3, ООП, Git, webpack, React, Redux (Redux-toolkit),
            TypeScript, REST API (fetch, axios, TRK Query), npm,
            styled-components, tailwindcss
          </div>
          <div className='mb-3'>
            <span className='fw-bold'>Контакты: </span>{' '}
            <a href='https://t.me/mougra'>https://t.me/mougra</a>,
            mougraaa@gmail.com
          </div>
          <div className='mb-4'>
            <span className='fw-bold'>GitHub: </span>{' '}
            <a href='https://github.com/mougra'>https://github.com/mougra</a>
          </div>
          <Carousel className='w-75 mx-auto mb-4'>
            <Carousel.Item interval={3000}>
              <img
                src={filter}
                alt='First slide'
                className='d-block mx-auto'
                height='372px'
                width='600px'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className='d-block mx-auto'
                height='372px'
                width='600px'
                src={rickandmorty}
                alt='Second slide'
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className='d-block mx-auto'
                height='372px'
                width='600px'
                src={calendar}
                alt='Third slide'
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className='d-block mx-auto'
                height='372px'
                width='600px'
                src={piano}
                alt='Fourth slide'
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className='d-block mx-auto'
                height='372px'
                width='600px'
                src={table}
                alt='Fived slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  )
}

export default AboutMe
