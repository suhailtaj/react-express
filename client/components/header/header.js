import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
	render() {
		return(
			<header className="app-header navbar">
				<button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button">&#9776;</button>
				<a className="navbar-brand"></a>
				<ul className="nav navbar-nav hidden-md-down">
				   <li className="nav-item">
						<a className="nav-link navbar-toggler sidebar-toggler">&#9776;</a>
					</li>
					<li className="nav-item px1">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item px1">
						<Link className="nav-link" to="/about">About</Link>
					</li>
				</ul>
				 <ul className="nav navbar-nav ml-auto">
				 	<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<img src="https://www.gravatar.com/avatar/anishreddy202@gmail.com?size=35" className="img-avatar" alt="anishreddy202@gmail.com" />
							<span className="hidden-md-down">admin</span>
						</a>
						<div className="dropdown-menu dropdown-menu-right">
						  <a className="dropdown-item"><i className="fa fa-user"></i> Profile</a>
						  <a className="dropdown-item"><i className="fa fa-lock"></i> Logout</a>
						</div>
					</li>
				 </ul>
			</header>
		)
	}
}

export default Header
