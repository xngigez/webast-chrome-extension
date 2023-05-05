import {useState} from 'react';
import {Form} from 'react-router-dom';

import {Config} from '../config/Config';
import {IsEmailValid, IsPasswordValid} from '../utils/ValidationUtils';
import AppToast from '../components/AppToast';

const {API_URL} = Config;

export default function Login(): JSX.Element {
	const [toastMessage, setToastMessage] = useState('');

	/* 
	 * Email
	 */
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');

	const emailInputChange = (event: any) => {
		setEmail(event.target.value);
	};

	const emailValidate = function () {
		setEmailError(''); // Reset errors

		if (!IsEmailValid(email)) {
			setEmailError('Email is invalid.');
		}
	};

	/*
	 * password
	 */
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const passwordInputChange = (event: any) => {
		setPassword(event.target.value);
	};

	const passwordValidate = function () {
		setPasswordError('');

		if (!IsPasswordValid(password)) {
			setPasswordError('Min 6 characters, small and capital letter, a number and special character.');
		}
	};

	// Password hide
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = function () {
		setShowPassword(!showPassword);
	};

	/*
	 * Form
	 */
	const [isLogingIn, setIsLogingIn] = useState<boolean>(false);

	// Update formData
	const handleFormSubmit = (event: any) => {
		event.preventDefault();

		emailValidate();
		passwordValidate();

		if (emailError !== '' || passwordError !== '' || email === '' || password === '') {
			return;
		}

		const buttonName = event.nativeEvent.submitter.name;
		setIsLogingIn(true);

		if (buttonName === 'loginButton') {
			// handle login form data
			login(email, password);
		} else if (buttonName === 'registerButton') {
			// handle registration form data
			console.log('');
		}
	};

	/*
	 * Login
	 */
	const login = async (emailParam: string, passwordParam: string) => {
		const requestOptions: any = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: emailParam,
				password: passwordParam,
			}),
			redirect: 'follow',
		};

		try {
			const response = await fetch(`${API_URL}/auth/login`, requestOptions);

			console.log(response);

			const json = await response.json();

			if (!response.ok) {
				throw new Error(json.message);
			}

			if (json) {
				// localStorage.setItem("webast-email", email);
				// localStorage.setItem("webast-token", json.data.token);

				// window.location = "dash.html";
				console.log(json.data);
			}

			setIsLogingIn(false);
		} catch (error: any) {
			setIsLogingIn(false);
			setToastMessage(error.message);
		}
	};

	return (
		<>
			<div className="container">
				<Form method='post' onSubmit={handleFormSubmit} noValidate>
					{/* Email */}
					<div className="mb-3">
						<label className="form-label" htmlFor="email">Email address*</label>

						<input
							id="email"
							value={email}
							onChange={emailInputChange}
							onBlur={emailValidate}
							className={`form-control form-control-lg rounded-pill ${(emailError === '') ? '' : 'is-invalid'}`}
							type="email"
							placeholder="Enter email address." />

						<div className="invalid-feedback">
							{emailError}
						</div>
					</div>

					{/* Password */}
					<div className="mb-3">
						<label className="form-label" htmlFor="password">Password*</label>

						<div className="input-group mb-3">
							<input
								id="password"
								value={password}
								onChange={passwordInputChange}
								onBlur={passwordValidate}
								className={`form-control form-control-lg rounded-pill rounded-end ${(passwordError === '') ? '' : 'is-invalid'}`}
								type={(showPassword) ? 'text' : 'password'}
								placeholder="Enter password." />

							<button
								onClick={toggleShowPassword}
								className="btn btn-outline-secondary rounded-pill rounded-start" type="button" id="button-addon2">
								<i className={(showPassword) ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
							</button>

							<div className="invalid-feedback visible">
								{passwordError}
							</div>
						</div>
					</div>

					{/* Submit button */}

					<div className="d-grid mb-3">
						<button type="submit" name="loginButton" className="btn btn-primary btn-lg rounded-pill" disabled={isLogingIn}>
							Login&#160; &#160; &#160;
							{(isLogingIn) ? <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : <i className="bi bi-box-arrow-right"></i>}
						</button>
					</div>

					<div className="d-grid mb-3">
						<button type="submit" name="registerButton" className="btn btn-success btn-lg rounded-pill" disabled={isLogingIn}>
							Register&#160;
							{(isLogingIn) ? <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : <i className="bi bi-pencil-square"></i>}
						</button>
					</div>

					{/* TODO: Add forget option
						<a href="dash.html">dash</a> */}
				</Form>
			</div>


			<AppToast
				toastMessage={toastMessage} // Just show prop once.
				setToastMessage={setToastMessage} // Pass in order to make empty toastMessage after toast dissaper.
			/>
		</>
	);
}
