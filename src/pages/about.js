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
        <StaticImage src="../images/download-5.jpg" alt="Students" />
      </Row>
    </Container>
    <Container fluid className="g-4">
      <Row xs={1} md={6} className="pt-10 g-4 justify-content-center">
        <Col><h2 className="pt-4 sticky-top">About</h2></Col>
        <Col></Col>
        <Col md={4} id="about">
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
          <StaticImage src="../images/class2700.jpg" alt="Students" className="m-4"/>
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
            <p>To understand more about Iyengar Yoga go to: <a href="https://iyengar-yoga.org.nz/" target="_blank">iyengar-yoga.org.nz</a> or <a href="https://iyengaryoga.asn.au/" target="_blank">iyengaryoga.asn.au</a></p>
            <p></p>
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
            <li><a href="#penny">Penny Mitropoulos</a></li>
            <li><a href="#simon">Simon Forgarty</a></li>
          </ul>
        </Col>
        <Col md={4} id="teachers"> 
          <p>The Iyengar Yoga Certification and Assessment process as set out by B.K.S. Iyengar is world-renowned for its thoroughness and rigour. The training process spans years, and once the candidate successfully passes assessment and becomes certified, they continue their training with senior teachers, and work to further develop their practice-based understanding and skill as teachers.</p>
          <div id="tessa" className="pb-4 pt-4">
            <StaticImage src="../images/tessa_lg.jpg" alt="Tessa Meek" className="mb-4"/>
            <h3>Tessa Meek</h3>
            <p>Tessa has been practising Iyengar yoga for 30 years. In 1998 she started teaching classes and has been teaching continuously since then. At the start of 2007, Tessa opened her own studio, Iyengar Yoga Centre of Wellington.</p>
            <p>Tessa is an intuitive, empathetic and observant teacher. She is dedicated to teaching yoga in a way that enables students to understand for themselves, so that their practice will engage and support them mentally, emotionally and physically throughout their lives.</p>
            <p>Tessa teaches with compassion and encourages each student to develop their depth of perception within the practice.</p>
            <p>Tessa is a senior teacher holding a JI 3 teaching certificate and has studied with Geeta Iyengar at conventions in Auckland (2003), Australia (2010) and Yoganusasanam Pune (2015) and has also studied with the Iyengars at the RIMYI, India.</p>
            <p>Tessa has been studying under the guidance of her teacher, Peter Thomson, for 22 years and is immensely grateful to Peter for the teachings and inspiration.</p>
            <p>Tessa teaches all the evening classes Tuesday to Thursday and also teaches the Thursday and Saturday morning classes, workshops and retreats.</p>
          </div>
          <div id="gina" className="pt-4 pb-4">
            <StaticImage src="../images/teachers_gina.jpg" alt="Gina Inverarity" className="mb-4"/>
            <h3>Gina Inverarity</h3>
            <p>Gina started Iyengar yoga in 2004 when she was expecting her first daughter. She found yoga immensely beneficial during pregnancy and after that a welcome respite when her children were young.</p>
            <p>She started attending Tessa’s classes in 2011 and is now a certified Iyengar teacher. Through her teaching she hopes to share the Iyengar values of inclusiveness and persistence and strives to remember that yoga is a discipline learnt and practiced over a lifetime.</p>
            <p>Gina has an honours degree in English and, after working as a book editor for almost twenty years, now writes books of her own.</p>
            <p>Gina teaches the Beginner Courses, Monday and Wednesday 10am classes, and the Level 1 on Sunday at 11.45am as well as regularly filling in for other teachers.</p>
          </div>
          <div id="penny" className="pt-4 pb-4">
            <StaticImage src="../images/teachers_penny.jpg" alt="Tessa Meek" className="mb-4"/>
            <h3>Penny Mitropoulos</h3>
            <p>Penny started her first journey into Iyengar yoga in 1997 under the teaching of Louisa Potter, at that time in Nelson at the Nelson Yoga Centre. After a few years she traveled to India to develop her practice and understanding. She studied under Sharat Arora, in Dharamsala learning the art of asana sequencing and yoga therapy. She then stayed in India for a year travelling and studying as much as she could before returning back to New Zealand.</p>
            <p>After a few years starting a family Penny completed her teacher training in 2007 with Susie Lever and she holds an Introductory Level 2 certification. Penny likes to create yoga sequences that challenge, nourish and deepen the practice allowing organically the body time to open or release within the asanas. Her classes will be light but challenging focusing on alignment.</p>
            <p>After a couple of years break Penny is returning to teaching. Penny has a Bachelor in Sport and Recreation and works in the events and visits industry nationally. Penny teaches the early morning Friday class.</p>
          </div>
          <div id="simon" className="pt-4 pb-4">
            <StaticImage src="../images/download-5.jpg" alt="Tessa Meek" className="mb-4"/>
            <h3>Simon Forgarty</h3>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  )
}

export default IndexPage