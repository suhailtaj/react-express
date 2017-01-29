
import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	render() {
		return(
			<div className="jumbotron">
			  <h2>Anish's Movies WebSite</h2>
			  <p>React, Redux, React Router and Express</p>
			  <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		)
	}
}

export default Home
