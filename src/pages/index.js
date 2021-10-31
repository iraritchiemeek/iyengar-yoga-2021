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
      <Row xs={1} md={6} className="pt-10 g-4 justify-content-center">
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
      <Row xs={1} className="d-flex justify-content-between align-content-center pt-10">
        <Col md={6}>
          <StaticImage src="../images/download-5.jpg" alt="Students" className="m-4"/>
        </Col>
        <Col md={4} className="mt-auto mb-auto p-4">
          <StaticImage src="../images/Iyengar_yoga_2020_bw_3085.jpg" alt="Students" className="m-4"/>
        </Col>
      </Row>
      <Row xs={1} className="justify-content-center pt-10">
        <Col md={8}>
          <p className="quote">“Change leads to disappointment if it is not sustained. Transformation is sustained change, and it is achieved through practice.”</p>
          <p className="quote-author">- B.K.S Iyengar</p>
        </Col>
      </Row>
      <Row xs={1} md={6} className="g-4 justify-content-center pt-10">
        <Col><h2 className="sticky-top pt-4">Class Levels</h2></Col>
        <Col>
          <ul className="sticky-top pt-4 list-unstyled">
            <li><a href="#level-1">Level 1</a></li>
            <li><a href="#level-2">Level 2</a></li>
            <li><a href="#level-2-3">Level 2/3</a></li>
            <li><a href="#level-general">General</a></li>
            <li><a href="#level-restorative">Restorative</a></li>
            <li><a href="#level-beginner">Beginner Course</a></li>
          </ul>
        </Col>
        <Col md={4}> 
          <div id="level-1" className="pb-4 pt-4">
            <h3>Level 1</h3>
            <p>If you have completed our Beginner Course or are new to Iyengar yoga, the Level 1 classes are the best place to start. In Level 1 classes the preliminary postures, or asanas, are taught in a way that develops a foundational understanding of the method of Iyengar yoga and its use of props.</p>
            <p>If it is your first class please arrive ten minutes early so the teacher can ask about any specific injuries or medical conditions you may have and so you can settle in.</p>
            <p>Every student progresses at their own pace, depending on consistency, but on average you will spend at least a year as a Level 1 student.</p>
            <p>If you are visiting from other Iyengar schools feel free to join at your usual class 'level'.</p>
            <p>For students who have previous experience from our Level 1 or General level classes. If you have been regularly attending our other classes for some time please feel free to jump up to Level 2 classes whenever you feel ready or enquire with our teachers at any time if you're not sure.</p>
          </div>
          <div id="level-2" className="pt-4 pb-4">
            <h3>Level 2</h3>
            <p>In Level 2 classes we start to work with more subtlety, precision, and longer timings within the postures. A wider range of asanas are introduced including the inversions. In the Level 2 classes we gradually build up our stamina and understanding of Sirsasana and Sarvangasana (headstand and shoulder stand) which are important components of a balanced practice.</p>
            <p>Regular attendance allows for the benefits of the practice to integrate into our lives and ensures steady progress.</p>
          </div>
          <div id="level-2-3" className="pt-4 pb-4">
            <h3>Level 2/3</h3>
            <p>For our regularly attending students who have an ongoing commitment to their practice and have already spent some time attending Level 2 classes.</p>
            <p>Tessa teaches the Level 2/3 classes and considers these classes to be for students are working with intention to deepen their understanding of the practice and wish to further integrate yoga into their lives. In these classes we continue to refine our skill in action and develop greater depth of perception in the practice. There is a strong emphasis on the importance of the inversions and Sirsasana and Sarvangasana should already be established.</p>
            <p>To get the most from these classes, regular attendance is expected and you should already have a home practice or have a willingness to begin one.</p>
          </div>
          <div id="level-general" className="pt-4 pb-4">
            <h3>General</h3>
            <p>These classes are suitable for everybody although if you are completely new to yoga these classes may not necessarily be the most ideal place for you to start. See our New Student section for more detailed information.</p>
            <p>General classes are taught in the same progression as above, but all students are mixed in together. Newer students therefore also benefit from working in with and observing more experienced students. Alternative postures will be given when more experienced students are practicing inversions and other asanas that may not yet be suitable for newer students.</p>
            <p>Our general classes are a bustling and diverse mix of keen yogis!</p>
          </div>
          <div id="level-restorative" className="pt-4 pb-4">
            <h3>Restorative</h3>
            <p>Suitable for students who have at least a little experience with Iyengar yoga (not ideal for new beginners, sorry).</p>
            <p>BKS Iyengar originally developed not just the use of props in yoga, but he also developed restorative yoga as a practice in itself, which is now very popular and widely appreciated for its therapeutic benefits.</p>
            <p>The restorative classes are slower in pace with an emphasis on quietening physically, emotionally and mentally. These classes are especially helpful to relieve stress, tension, anxiety and to balance and soothe the central nervous system. Restorative practice is especially helpful for maintaining a healthy immune system. Quite simply, restorative yoga makes you feel better!</p>
            <p>The Sunday night Restorative session is the perfect way to rejuvenate at the end of your week. We also have restorative workshops from time to time.</p>
          </div>
          <div id="level-beginner" className="pt-4 pb-4">
            <h3>Beginner Course</h3>
            <p>Our regular Beginner Courses are ideal for new students and include six specific beginner classes.</p>
            <p>Students start as beginners together and the course will develop confidence while starting a yoga practice.</p>
            <p>For more information please visit our New Students page.</p>
          </div>
        </Col>
      </Row>
      <Row xs={1} className="d-flex justify-content-between align-content-center pt-10">
        <Col md={6}>
          <Row className="d-flex justify-content-end">
            <Col md={12} xs={12}>
              <StaticImage src="../images/download-5.jpg" alt="Students" className="m-4"/>
            </Col>
            <Col md={9}>
              <StaticImage src="../images/home2.jpg" alt="Students" className="m-4 pt-10" objectFit="contain"/>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="mt-auto mb-auto p-4">
          <StaticImage src="../images/download-6.jpg" alt="Students" className="m-4"/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default IndexPage