import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/open-sans"

import Header from '../components/header'
import Footer from '../components/footer'
import BgGrid from '../components/bgGrid'
import Timetable from '../components/timetable'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.scss'

function IndexPage() {

   const [showTimetable, setShowTimetable] = useState(false);

  return (
    <>
    <Timetable active={showTimetable}/>
    <BgGrid />
    <Header showTimetable={showTimetable} setShowTimetable={setShowTimetable} />
    <Container fluid>
      <Row xs={1}>
        <StaticImage src="../images/header-image.jpg" alt="Students" />
      </Row>
    </Container>
    <Container fluid className="g-4">
      <Row xs={1} md={6} className="pt-10 g-4 justify-content-center">
        <Col><h2 className="pt-4 sticky-top">New students</h2></Col>
        <Col>
          <div className="pt-4 sticky-top">
            <h3>Beginner courses</h3>
            <p>Tuesdays 7.45 – 9pm</p>
            <p>Upcoming Courses:</p>
            <p>Tuesday 18th August – 22nd September</p>
            <p>Tuesday 20th October – 24th November</p>
          </div>
        </Col>
        <Col md={4} className="pt-4" id="new-students">
          <p>New students are welcome to attend our studio anytime. We teach in a way that makes yoga accessible to everybody regardless of age, gender, fitness or flexibility. Everyone can benefit from the practice of yoga, it’s all about how we practice.</p>
          <p>If you are new to Iyengar yoga it's best to start is with our <a href="#level-beginner">Beginner Courses</a>, the <a href="#level-1">Level 1</a> classes or <a href="#level-general">General classes</a>. Our 4 week Beginner courses is ideal if you haven’t practiced yoga before and aren’t feeling confident or are working with an injury or a medical condition. The foundational understanding of the practice the Beginner course provides can benefit everyone, and will prepare you to attend our other classes.</p>
          <p>If you've already practiced other styles of yoga before; are feeling confident; or want to get started straight away you can join our Level 1 classes. We warmly welcome the many new students who start at Level 1. New students are also welcome at General level classes, although those completely new to yoga would ideally attend a few Level 1 classes first to get a feel for the method and the use of props.</p>
          <p>Iyengar yoga is a specific method that teaches us how to practice. If you have practiced other styles of yoga before, you will gain the greatest benefits if you come with an open mind, and are receptive to learning a new methodology.</p>
          <p>Please feel free to contact <a href="mailto:tessa@wellingtonyoga.co.nz">Tessa</a> if you have any questions or if you would like further advice regarding the best way to start your yoga practice with us.</p>
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
        <Col><h2 className="spt-4 pt-4 sticky-top">Class levels</h2></Col>
        <Col>
          <ul className="sticky-top pt-4 list-unstyled">
            <li><a href="#level-1">Level 1</a></li>
            <li><a href="#level-2">Level 2</a></li>
            <li><a href="#level-2-3">Level 3</a></li>
            <li><a href="#level-general">General</a></li>
            <li><a href="#level-live">Live-streamed classes</a></li>
            <li><a href="#level-beginner">Beginner course</a></li>
            <li><a href="#level-workshop">Workshops</a></li>
            <li><a href="#level-visiting">Visiting Iyengar yoga students</a></li>
          </ul>
        </Col>
        <Col md={4} id="class-levels"> 
          <div className="pb-4 pt-4">
            <h3>Our classes</h3>
            <p>Our classes teach traditional yoga in a safe, supportive and non-competitive environment with a strong emphasis on learning through practice.</p>
          </div>
          <div id="level-1" className="pb-4 pt-4">
            <h3>Level 1</h3>
            <p>Level 1 classes are the best place to start if you have completed our Beginner course or are new to Iyengar yoga. These classes teach the preliminary postures, or asanas, in a way that develops a foundational understanding of the Iyengar yoga method, and its use of props.</p>
            <p>Please arrive at class ten minutes early so the teacher can ask about any injuries or medical conditions you may have, and so you can settle in.</p>
            <p>Students progress at their own pace, depending on how consistently they  practice. On average you will spend 1-2 years as a Level 1 student.</p>
            <p>If you have been regularly attending our Level 1 or General classes for some time, please to move up to Level 2 classes when you feel ready. Feel free to ask  our teachers if you're not sure which is the best level of class for you.</p>
          </div>
          <div id="level-2" className="pt-4 pb-4">
            <h3>Level 2</h3>
            <p>In Level 2 classes we start to work with more subtlety, precision, and longer timings within the postures. A wider range of asanas are introduced, including  inversions. In the Level 2 classes we gradually build up our stamina and understanding of Sirsasana (headstand) and Sarvangasana (shoulder stand) which are important components of a balanced practice.</p>
            <p>Regularly attending students progress steadily, and find the benefits of the practice  integrate into their lives. </p>
          </div>
          <div id="level-2-3" className="pt-4 pb-4">
            <h3>Level 3</h3>
            <p>Level 3 classes are available for  regularly attending students who have already spent some time attending Level 2 classes and  are committed  to their practice.</p>
            <p>Tessa teaches the Level 3 classes which are for students who work with intention to deepen their understanding of the practice, and to further integrate yoga into their lives. In these classes we continue to refine our skill in action and develop greater depth of perception in the practice. There is a strong emphasis on the importance of the inversions and Sirsasana and Sarvangasana should already be established.</p>
            <p>Regular attendance is neccessary to get the most from these classes. You will already have a home practice or be willing to begin one.</p>
          </div>
          <div id="level-general" className="pt-4 pb-4">
            <h3>General</h3>
            <p>General classes are suitable for everybody, but are not the ideal place to start if you are completely new to yoga. See our <a href="#new-students">New Student</a> section for more information.</p>
            <p>n general classes, students practicing at different levels are mixed in together. Students are supported to practice at their level and newer students benefit from practicing with and observing more experienced students. Alternative postures will be given when more experienced students are practicing inversions and other asanas that may not yet be suitable for newer students.</p>
            <p>Our general classes are a bustling and diverse mix of keen yogis!</p>
          </div>
          <div id="level-live" className="pt-4 pb-4">
            <h3>Live-streamed classes</h3>
            <p>Some General and Level 2 classes include a live-streamed option for students to attend without being in the studio. In-person teaching is particularly important when beginning yoga practice, so you will need to be at least a regularly-attending Level 1 student familiar with using the props to attend a live-streamed class.</p>
            <p>Wellington-based students are expected to attend the studio when  possible to benefit from in-person teaching.   </p>
          </div>
          <div id="level-beginner" className="pt-4 pb-4">
            <h3>Beginner Course</h3>
            <p>Our regular Beginner courses are ideal for new students and include four specific beginner classes.</p>
            <p>Students start as beginners together and the course  develops confidence while starting a yoga practice.</p>
            <p>You can find more information on our <a href="new-students">New students</a> page.</p>
          </div>
          <div id="level-workshop" className="pt-4 pb-4">
            <h3>Workshops</h3>
            <p>Workshops allow more in-depth focus on areas of practice and are offered from time to time. Information about workshops, and any prerequisites, is included in studio newsletters. Some familiarity with the Iyengar yoga method is usually required.</p>
          </div>
          <div id="level-visiting" className="pt-4 pb-4">
            <h3>Visiting Iyengar yoga students</h3>
            <p>If you are visiting from other Iyengar schools feel free to join at your usual class ‘level'.</p>
          </div>
        </Col>
      </Row>
      <Row xs={1} className="d-flex justify-content-between align-content-center pt-10">
        <Col md={6}>
          <Row className="d-flex justify-content-end">
            <Col md={12} xs={12}>
              <StaticImage src="../images/iyengar_yoga_2020_3378_bw.jpg" alt="Students" className="m-4"/>
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
      <Row xs={1} md={6} className="pt-10 g-4 justify-content-center">
        <Col><h2 className="pt-4 sticky-top">Pricing</h2></Col>
        <Col>
          <div className="pt-4 sticky-top">
            <ul className="list-unstyled">
              <h3>Casual class - $25</h3>
              <li><a target="_blank" href="https://wellingtonyoga.punchpass.com/passes/17357?check=1482721563">Purchase</a></li>
            </ul>
            <ul className="list-unstyled">
              <h3>8 Class Card - $200</h3>
              <li>No expiry</li>
              <li><a href="https://wellingtonyoga.punchpass.com/passes/131642?check=1634639180" target="_blank">Purchase</a></li>
            </ul>
            <ul className="list-unstyled">
              <h3>8 Class Card - $180</h3>
              <li>Valid 5 weeks</li>
              <li><a href="https://wellingtonyoga.punchpass.com/passes/131643?check=1634639325" target="_blank">Purchase</a></li>
            </ul>
            <ul className="list-unstyled">
              <h3>20 Class Card - $400</h3>
              <li>Valid 7 weeks</li>
              <li><a href="https://wellingtonyoga.punchpass.com/passes/131644?check=1634639474" target="_blank">Purchase</a></li>
            </ul>
            <p className="pt-4">Please contact Tessa for our Student Discount Code (or in situations of financial hardship).</p>
          </div>
        </Col>
        <Col md={4} className="pt-4">
          <h3>Yoga Gift Vouchers</h3>
          <p>We have beautiful gift vouchers available for all our classes and courses. Please email tessa@wellingtonyoga.co.nz to enquire.</p>
          <h3>Things To Know</h3>
          <p>Please try to arrive and be ready and settled on your mat by the class start time. We take shoes off at the door and carry through to the changing rooms. Always switch cell phones off for the duration of the class.</p>
          <p>It is better not to eat 2-3 hours before class. No water bottles in class please as it is better to drink before and after practicing, not during.</p>
          <p>Wear comfortable clothing, preferably that fits around the knees, or so the knees can be seen. This is so the teacher can check the alignment of the knee joint, especially if you have knee issues.</p>
          <p>Out of respect for others in the room please refrain from wearing perfumes or strong deodorants.</p>
          <p>Remember, yoga is non-competitive – do not be concerned with others – you are practicing for your own yoga process.</p>
          <p>All prices include GST. Eftpos available (not credit). No refunds or transfers.</p>
          <p>Some of our studio classes are online-integrated (suitable for students who have practiced with us before or by prior arrangement). Our usual yoga passes are valid to use for our online-integrated classes. If you are not sure how frequently you will attend online classes, choose the 'no expiry' card.</p>
          <p>For further information about our online-integrated studio classes visit our <a href="#class-levels">class levels</a> section.</p>
        </Col>
      </Row>
      <Row className="pt-10">
        <Col><StaticImage src="../images/home2.jpg" objectFit="cover" alt="Students" className="m-4"/></Col>
      </Row>
    </Container>
    <Footer />
    </>
  )
}

export default IndexPage