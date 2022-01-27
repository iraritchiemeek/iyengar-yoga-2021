import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BgGrid() {
	return (
		<div className="bg-grid">
			<Row>
				{Array.from({ length: 6 }, (_, i) => <Col key={i}></Col>)}
			</Row>
		</div>
	)
}

export default BgGrid