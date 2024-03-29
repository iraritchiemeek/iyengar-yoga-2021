import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
	return (
		<footer className="px-3 py-5 bg-blue" id="footer">
			<Container fluid className="g-4">
				<Row xs={1} md={6} className="g-4 justify-content-center">
					<Col><h3>Contact</h3></Col>
					<Col>
						<h3>Iyengar Yoga Centre</h3>
						<p>"The Bakehouse"<br/>6 Swan Lane<br />Te Aro<br/>Wellington<br/>New Zealand</p>
					</Col>
					<Col md={4}>
						<p>Our studio is in The Bakehouse, a beautiful historic brick building from 1912. Swan Lane is a walkway between Floriditas on Cuba St and Marion St. The entrance is on the side of the "The Bakehouse", through the stainless steel door, upstairs and to the left. (Above Noble Rot Wine Bar.)</p>
						<p>Email: <a href="mailto:tessa@wellingtonyoga.co.nz">tessa@wellingtonyoga.co.nz</a></p>
						<p><a href="https://www.facebook.com/IyengarYogaCentreWellington/" target="_blank">Facebook</a></p>
						<p><a href=" https://www.instagram.com/iyengaryogawellington/" target="_blank">Instagram</a></p>
					</Col>
				</Row>
				<Row>
					<Col></Col>
					<Col xs={9} className="d-flex justify-content-end">
						<StaticImage src="../images/map.png" alt="Map" className="m-4"/>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer