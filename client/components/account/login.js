import React from 'react';

class Login extends React.Component {
	render() {
		return (
	<div className="container" style={{top:'5em'}}>
		<div className="row">
			<div className="col-sm-3 col-md-3 col-lg-3">
			</div>
			<div className="col-sm-6 col-md-6 col-lg-6">
				<form className="register-form">
				<div className="row">
					<label htmlFor="firstName">Username</label>
					<input name="firstName" className="form-control" type="text" />
				</div>
				<div className="row">
					<label htmlFor="password">Password</label>
					<input name="password" className="form-control" type="password" />
				</div>
				<hr />
				<div className="row btn-row">
				<div className="col-sm-6 col-md-6 col-lg-6">
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<button className="btn btn-default regbutton">Login</button>
					</div>
				</div>
				</form>
			</div>
			<div className="col-sm-3 col-md-3 col-lg-3">
			</div>
		</div>
	</div>
		)
	}
}

export default Login;

					// <div className="col-sm-6 col-md-6 col-lg-6">
					// 	<button className="btn btn-default regbutton">Register</button>
					// </div>
					// <div className="col-sm-6 col-md-6 col-lg-6">
					// 	<button className="btn btn-default logbutton">Sign up</button>
					// </div>
