
import React from 'react';
import {Link} from 'react-router';

class About extends React.Component {
	render() {
		return(
			<div className="jumbotron">
			  <h2>About Movies</h2>
			  <p>React, Redux, React Router and Express</p>
			  <Link to="/" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		)
	}
}

export default About
