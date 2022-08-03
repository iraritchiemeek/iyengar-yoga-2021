import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "gatsby"

function Header(props) {

	const handleShowTimetableChange = () => {
		console.log('test')
		console.log(props.showTimetable)
		props.setShowTimetable(!props.showTimetable)
	}

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
									<Nav.Item onClick={handleShowTimetableChange}>Timetable</Nav.Item>
								</Col>
								<Col  className="">
									<Nav.Item><Link to="../#new-students">New Students</Link></Nav.Item>
									<Nav.Item><Link to="../#class-levels">Class Levels</Link></Nav.Item>
									<Nav.Item><Link to="../#pricing">Pricing</Link></Nav.Item>
									<Nav.Item><Link to="../retreats">Retreats</Link></Nav.Item>
								</Col>
								<Col  className="">
									<Nav.Item><Link to="../about#about">About</Link></Nav.Item>
									<Nav.Item><Link to="../about#teachers">Teachers</Link></Nav.Item>
									<Nav.Item><Link to="#footer">Contact</Link></Nav.Item>
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