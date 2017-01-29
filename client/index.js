import React from 'react';
import {render, ReactDOM} from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './components/app.js'
// import Home from './components/home/home.js';
// import About from './components/about/about.js'
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('app')
)

//render(<App />, document.getElementById('app'));

// const ES5 = React.createClass({
// 	render: function() {
// 		return (
// 			<div>Hello from React - ES5 Component</div>
// 		)
// 	}
// })

// class ES6 extends React.Component {
// 	render() {
// 		return (
// 			<div> Hello from React - ES6 Component</div>
// 		)
// 	}
// }

// class Main extends React.Component {
//   render() {
//    return (
// 	<div>
// 		<ES5 />
// 		<ES6 />
// 		<Home />
// 		<About />
// 	</div>
// 	)
//   }
// }

// ReactDOM.render(<Main />, document.getElementById('app'));
