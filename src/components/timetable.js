import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Timetable(props) {
	return (
		<div className={props.active ? 'timetable-container' : 'hidden timetable-container'}>
			<iframe name="frame2" src="https://wellingtonyoga.punchpass.com/calendar?embed=true" height="700" width="100%" frameBorder="0" allowFullScreen></iframe>
		</div>
	)
}

export default Timetable