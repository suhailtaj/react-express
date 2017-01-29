import React, {PropTypes} from 'react';

class App extends React.Component {
	render() {
		return(
			<div className="container-fluid">
			  <h2>Header Goes Here</h2>
			  {this.props.children}
			</div>
		)
	}
}

App.PropTypes = {
	children: PropTypes.object.isRequired
}

export default App
