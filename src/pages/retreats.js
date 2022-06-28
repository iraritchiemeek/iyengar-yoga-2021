import * as React from "react"
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
  return (
    <>
    <Timetable />
    <BgGrid />
    <Header />
    <Container fluid>
      <Row xs={1}>
        <StaticImage src="../images/bali.jpg" alt="Students" />
      </Row>
    </Container>
    <Container fluid className="g-4">
      <Row xs={1} md={6} className="g-4 justify-content-center pt-10">
        <Col><h2 className="spt-4 pt-4 sticky-top">Upcoming Retreats</h2></Col>
        <Col>
          <ul className="sticky-top pt-4 list-unstyled">
            <li><a href="#wanaka">Wanaka Retreat </a></li>
            <li><a href="#kapiti">Kāpiti Island Retreat</a></li>
            <li><a href="#otaki">Ōtaki Retreat</a></li>
            <li><a href="#bali">Bali Intensive</a></li>
          </ul>
        </Col>
        <Col md={4}> 
          <p>Retreats allow us to step away from the demands of our day to day lives and rebalance physically, emotionally and mentally. The extra time on retreat allows us to quieten and deepen our understanding of the practice.</p>
          <p>Pranayama, meditation and asana are part of the daily schedule which bring about clarity of mind and vitality.</p>
          <p>Tessa has been teaching many retreats every year since 2008 and we’ve been to some amazing places including Bhutan, Tibet and annual retreats in Bali. We also love our local retreats held at some very special places here in Aotearoa.</p>
          <div id="wanaka" className="pb-4 pt-4">
            <h3>Wanaka</h3>
            <p className="mb-0">Lookout Lodge</p>
            <p className='pb-2'>21st -23rd January 2023 (Wellington Anniversary Weekend)</p>
            <p>Tessa has been practising Iyengar yoga for 30 years. In 1998 she started teaching classes and has been teaching continuously since then. At the start of 2007, Tessa opened her own studio, Iyengar Yoga Centre of Wellington.</p>
            <p>Tessa is an intuitive, empathetic and observant teacher. She is dedicated to teaching yoga in a way that enables students to understand for themselves, so that their practice will engage and support them mentally, emotionally and physically throughout their lives.</p>
            <p>Tessa teaches with compassion and encourages each student to develop their depth of perception within the practice.</p>
            <p>Tessa is a senior teacher holding a JI 3 teaching certificate and has studied with Geeta Iyengar at conventions in Auckland (2003), Australia (2010) and Yoganusasanam Pune (2015) and has also studied with the Iyengars at the RIMYI, India.</p>
          </div>
          <div id="kapiti" className="pt-4 pb-4">
            <h3>Kāpiti Island Retreat</h3>
            <p className='pb-2'>21st - 26th October 2022</p>
            <p>In Level 2 classes we start to work with more subtlety, precision, and longer timings within the postures. A wider range of asanas are introduced including the inversions. In the Level 2 classes we gradually build up our stamina and understanding of Sirsasana and Sarvangasana (headstand and shoulder stand) which are important components of a balanced practice.</p>
            <p>Regular attendance allows for the benefits of the practice to integrate into our lives and ensures steady progress.</p>
          </div>
          <div id="otaki" className="pt-4 pb-4">
            <h3>Ōtaki Retreat</h3>
            <p className="mb-0">Waihōanga Lodge</p>
            <p className='pb-2'>February (date to be confirmed)</p>
            <p>Gina started Iyengar yoga in 2004 when she was expecting her first daughter. She found yoga immensely beneficial during pregnancy and after that a welcome respite when her children were young.</p>
            <p>She started attending Tessa’s classes in 2011 and is now a certified Iyengar teacher. Through her teaching she hopes to share the Iyengar values of inclusiveness and persistence and strives to remember that yoga is a discipline learnt and practiced over a lifetime.</p>
            <p>Gina has an honours degree in English and, after working as a book editor for almost twenty years, now writes books of her own.</p>
            <p>Gina teaches the Beginner Courses, Monday and Wednesday 10am classes, and the Level 1 on Sunday at 11.45am as well as regularly filling in for other teachers.</p>
          </div>
          <div id="bali" className="pt-4 pb-4">
            <h3>Bali Intensive</h3>
            <p className="mb-0">Abasan Mountain Retreat, Tejakula</p>
            <p className='pb-2'>16th - 31st July 2023</p>
            <p>Gina started Iyengar yoga in 2004 when she was expecting her first daughter. She found yoga immensely beneficial during pregnancy and after that a welcome respite when her children were young.</p>
            <p>She started attending Tessa’s classes in 2011 and is now a certified Iyengar teacher. Through her teaching she hopes to share the Iyengar values of inclusiveness and persistence and strives to remember that yoga is a discipline learnt and practiced over a lifetime.</p>
            <p>Gina has an honours degree in English and, after working as a book editor for almost twenty years, now writes books of her own.</p>
            <p>Gina teaches the Beginner Courses, Monday and Wednesday 10am classes, and the Level 1 on Sunday at 11.45am as well as regularly filling in for other teachers.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  )
}

export default IndexPage