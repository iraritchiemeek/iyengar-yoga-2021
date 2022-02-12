import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Footer() {
	return (
		<footer className="px-3 py-5 bg-blue">
			<Container fluid className="g-4">
				<Row xs={1} md={6} className="g-4 justify-content-center">
					<Col><h3>Contact</h3></Col>
					<Col>
						
					</Col>
					<Col md={4}>
						<p>Our studio is in The Bakehouse, a beautiful historic brick building from 1912. Swan Lane is a walkway between Floriditas on Cuba St and Marion St. The entrance is on the side of the "The Bakehouse", through the stainless steel door, upstairs and to the left. (Above Noble Rot Wine Bar.)</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer