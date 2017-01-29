import React from 'react';
import ReactDOM from 'react-dom';

const ES5 = React.createClass({
	render: function() {
		return (
			<div>Hello from React - ES5 Component</div>
		)
	}
})

class ES6 extends React.Component {
	render() {
		return (
			<div> Hello from React - ES6 Component</div>
		)
	}
}

class Main extends React.Component {
	render() {
		return (
			<div>
				<ES5 />
				<ES6 />
			</div>
		)
	}
}



ReactDOM.render(<Main />, document.getElementById('app'));

