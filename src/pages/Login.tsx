import {Form} from 'react-router-dom';


export default function Login(): JSX.Element {



	return (
		<>
			<div className="container">
				<Form method='post'>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
						<div id="emailHelp" className="form-text"></div>

						<div className="mb-3">
							<label htmlFor="password" className="form-label">Password</label>
							<input type="password" className="form-control" id="password"/>
						</div>

						{/* TODO: Add grid row */}
						<button id="loginButton" name="loginButton" type="submit" className="btn btn-primary" value="login">Login</button>
						<button id="registerButton" name="registerButton" type="submit" className="btn btn-success" value="register">Register</button>

						{/* TODO: Add forget option
						<a href="dash.html">dash</a> */}
					</div>
				</Form>
			</div>
		</>
	);
}
