import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "gatsby"

function Header() {
	return (
		<Navbar className="bg-white position-relative px-4 py-5" expand="md">
			<Row className="w-100">
				<Col xs={3} className="px-4">
					<Navbar.Brand id="logo">Iyengar Yoga Centre<br/>of Wellington<br/>New Zealand</Navbar.Brand>
				</Col>
				<Col/>
				<Col xs={6}>
					<Navbar.Toggle />
					<Nav>
						<Navbar.Collapse>
							<Row className="w-100">
								<Col className="">
									<Nav.Item><Link>Timetable</Link></Nav.Item>
								</Col>
								<Col  className="">
									<Nav.Item><Link>New Students</Link></Nav.Item>
									<Nav.Item><Link>Class Levels</Link></Nav.Item>
									<Nav.Item><Link>Pricing</Link></Nav.Item>
									<Nav.Item><Link>Retreats</Link></Nav.Item>
								</Col>
								<Col  className="">
									<Nav.Item><Link to="../about">About</Link></Nav.Item>
									<Nav.Item><Link>Teachers</Link></Nav.Item>
									<Nav.Item><Link>Contact</Link></Nav.Item>
								</Col>
							</Row>
						</Navbar.Collapse>
					</Nav>
				</Col>
			</Row>
		</Navbar>
	)
}

export default Header