import * as React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/open-sans"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.scss'

function IndexPage() {
  return (
    <>
    <Container fluid>
      <Row xs={1}>
        <StaticImage src="../images/header-image.jpg" alt="Students" />
      </Row>
    </Container>
    <Container fluid className="g-4">
      <Row xs={1} md={6} className="mt-4 g-4 justify-content-center">
        <Col><h2>New Students</h2></Col>
        <Col>
          <h3>Beginner courses</h3>
          <p>Tuesdays 7.45 – 9pm</p>
          <p>Upcoming Courses:</p>
          <p>Tuesday 18th August – 22nd September</p>
          <p>Tuesday 20th October – 24th November</p>
        </Col>
        <Col md={4}>
          <p>New students are welcome to join our studio anytime and we teach in a way that makes yoga accessible to everybody regardless of age, gender, fitness or flexibility. We think everyone can benefit from the practice of yoga, it’s all about how we practice.</p>
          <p>If you are new to Iyengar yoga the best place to start is with our Beginner Courses, the Level 1 classes or our General classes. Our Beginner Courses are ideal if you haven’t practiced yoga before and aren’t feeling confident or perhaps if you are working with limitations such as an injury or a medical condition. Everyone can benefit from attending our 6-week Beginner Course which is designed to build a foundational understanding of the practice and give you the confidence to start attending our other classes.</p>
          <p>If you have practiced other styles of yoga before, if you're feeling confident, or are feeling inclined to get started straight away you can join our level 1 classes. Many of our students do start with our level 1 and we welcome new students to these classes. We also welcome new students to our General level classes, although if you are completely new to yoga attending a few Level 1 classes first would be ideal to give you a feel for the method and the use of props.</p>
          <p>If you have practiced other styles of yoga before it is helpful to keep in mind that Iyengar yoga is a specific method that teaches us how to practice so it is ideal if you come in with an open mind and be receptive to learning a new methodology from the beginning.</p>
          <p>Please feel free to contact Tessa if you have any questions or if you would like further advice regarding the best way to start your yoga practice with us.</p>
        </Col>
      </Row>
      <Row xs={1} className="d-flex justify-content-between align-content-center mt-4">
        <Col md={6}>
          <StaticImage src="../images/header-image.jpg" alt="Students" className="m-4"/>
        </Col>
        <Col md={4} className="mt-auto mb-auto">
          <StaticImage src="../images/header-image.jpg" alt="Students" className="m-4"/>
        </Col>
      </Row>
      <Row xs={1} md={6} className="justify-content-center mt-4">
        <Col md={6}>
          <p className="quote">“Change leads to disappointment if it is not sustained. Transformation is sustained change, and it is achieved through practice.”</p>
          <p>- B.K.S Iyengar</p>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default IndexPage