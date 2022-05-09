import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BgGrid() {
	return (
		<div className="bg-grid">
			<Row>
				<Col xs={4} md={2}></Col>
				<Col xs={4} md={2}></Col>
				<Col xs={4} md={2}></Col>
				<Col xs={0} md={2}></Col>
				<Col xs={0} md={2}></Col>
				<Col xs={0} md={2}></Col>
			</Row>
		</div>
	)
}

export default BgGrid