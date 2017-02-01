import React from 'react';
import { Route, IndexRoute} from 'react-router'
import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Course from './components/course/course';
import Login from './components/account/login';
import Register from './components/account/register';

export default (
	<Route path="/" component={App}>
	  <IndexRoute component={Home}/>
	  <Route path="about" component={About} />
	  <Route path="course" component={Course} />
		<Route path="login" component={Login} />
		<Route path="register" component={Register} />
	</Route>
)
