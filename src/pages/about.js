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
        <StaticImage src="../images/header-image.jpg" alt="Students" />
      </Row>
    </Container>
    <Container fluid className="g-4">
      <Row xs={1} md={6} className="pt-10 g-4 justify-content-center">
        <Col><h2 className="pt-4 sticky-top">About</h2></Col>
        <Col></Col>
        <Col md={4}>
          <p>Our beautiful studio is fully equipped for yoga and offers a range of classes suitable for absolute beginners through to experienced practitioners.</p>
          <p>We teach traditional yoga in a safe, supportive and non-competitive environment with a strong emphasis on learning through practice.</p>
          <p>Our studio started with humble beginnings in 1998 in the Aro Valley Community Hall when Tessa Meek started teaching classes there.</p>
          <p>These classes were well supported and grew in number over time due to demand and before long Tessa was teaching five classes every week and continued to teach at the hall for eight years before opening the Iyengar Yoga Centre of Wellington at the start of 2007. Tessa is now a certified senior Iyengar teacher and is grateful for the support of our highly experienced teaching team. All our teachers are Iyengar certified (or on that path).</p>
          <p>Our studio is an inclusive, diverse and welcoming community of yogis and teachers.</p>
          <p>Iyengar yoga is renowned for aiding recovery from injury and correcting imbalances while improving and optimising overall function of the physical body.</p>
          <p>Yoga is a path of self-transformation, available to all regardless of age, gender, fitness or flexibility. Iyengar yoga is suitable for everybody!</p>
          <p>New Students are always welcome.</p>
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
          <p className="quote">“Words cannot convey the value of yoga. It has to be experienced.”</p>
          <p className="quote-author">- B.K.S Iyengar</p>
        </Col>
      </Row>
      <Row xs={1} md={6} className="g-4 justify-content-center pt-10">
        <Col>
        </Col>
        <Col md={4}> 
          <div id="level-1" className="pb-4 pt-4">
            <h3>B.K.S Iyengar</h3>
            <p>B.K.S Iyengar was an influential yoga master born in southern India in 1918, and is widely credited with bringing yoga to the west. From a young age he dedicated his life to the practice, and to sharing his wisdom and passion for the art, science and philosophy of yoga. The teachings of B.K.S Iyengar are deeply grounded in the ancient Yoga Sutras of Patanjali.</p>
            <p>B.K.S Iyengar wrote many books on yoga including the modern classic, Light on Yoga, first published in 1966, and more recently the inspirational gift of a book, Light on Life.</p>
            <p>Up until only weeks before his passing at the age of 95 he still practiced daily at his institute, RIMYI, in Pune, India, where he lived and worked with his son and daughter, Prashant and Geeta, who are also highly esteemed teachers and authors of yoga. Sadly Geeta Iyengar passed away in December 2018. Abhijata Iyengar, who is the grand daughter of BKS Iyengar and who chose to undertake intensive study with him from a young age, is now a well regarded teacher in her own right and is proving herself to be a compelling and strong young leader for the future of Iyengar Yoga.</p>
            <p>Iyengar yoga (a term coined by his students) is a practical and holistic approach to the vast subject of yoga, made accessible to all, and is practiced by millions of people worldwide. Iyengar Yoga is distinguished by its innovative use of props, its precision and emphasis on alignment within the asanas, and is renowned for its healing and therapeutic capabilities.</p>
            <p>To understand more about Iyengar Yoga go to: iyengar-yoga.org.nz</p>
          </div>
        </Col>
      </Row>
      <Row className="pt-10">
        <Col><StaticImage src="../images/home2.jpg" objectFit="cover" alt="Students" className="m-4"/></Col>
      </Row>
      <Row xs={1} md={6} className="g-4 justify-content-center pt-10">
        <Col><h2 className="spt-4 pt-4 sticky-top">Teachers</h2></Col>
        <Col>
          <ul className="sticky-top pt-4 list-unstyled">
            <li><a href="#tessa">Tessa Meek</a></li>
            <li><a href="#gina">Gina Inverarity</a></li>
          </ul>
        </Col>
        <Col md={4}> 
          <p>The Iyengar Yoga Certification and Assessment process as set out by B.K.S. Iyengar is world-renowned for its thoroughness and rigour. The training process spans years, and once the candidate successfully passes assessment and becomes certified, they continue their training with senior teachers, and work to further develop their practice-based understanding and skill as teachers.</p>
          <div id="tessa" className="pb-4 pt-4">
            <h3>Tessa Meek</h3>
            <p>Tessa has been practising Iyengar yoga for 30 years. In 1998 she started teaching classes and has been teaching continuously since then. At the start of 2007, Tessa opened her own studio, Iyengar Yoga Centre of Wellington.</p>
            <p>Tessa is an intuitive, empathetic and observant teacher. She is dedicated to teaching yoga in a way that enables students to understand for themselves, so that their practice will engage and support them mentally, emotionally and physically throughout their lives.</p>
            <p>Tessa teaches with compassion and encourages each student to develop their depth of perception within the practice.</p>
            <p>Tessa is a senior teacher holding a JI 3 teaching certificate and has studied with Geeta Iyengar at conventions in Auckland (2003), Australia (2010) and Yoganusasanam Pune (2015) and has also studied with the Iyengars at the RIMYI, India.</p>
            <p>Tessa has been studying under the guidance of her teacher, Peter Thomson, for 22 years and is immensely grateful to Peter for the teachings and inspiration.</p>
            <p>Tessa teaches all the evening classes Tuesday to Thursday and also teaches the Thursday and Saturday morning classes, workshops and retreats.</p>
          </div>
          <div id="penny" className="pt-4 pb-4">
            <h3>Level 2</h3>
            <p>In Level 2 classes we start to work with more subtlety, precision, and longer timings within the postures. A wider range of asanas are introduced including the inversions. In the Level 2 classes we gradually build up our stamina and understanding of Sirsasana and Sarvangasana (headstand and shoulder stand) which are important components of a balanced practice.</p>
            <p>Regular attendance allows for the benefits of the practice to integrate into our lives and ensures steady progress.</p>
          </div>
          <div id="gina" className="pt-4 pb-4">
            <h3>Gina Inverarity</h3>
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