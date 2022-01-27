import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
	return (
		<header className="px-3 py-5">
			<Row>
				<Col>
					<Row>
						<Col sm={3} className="logo">Iyengar Yoga Centre<br/>of Wellington<br/>New Zealand</Col>
					</Row>
				</Col>
				<Col></Col>
			</Row>
		</header>
	)
}

export default Header