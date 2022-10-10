import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import './login.css';
import UserService from '../../../service/userservice';

type Props = {
	setToken: (user: object) => void;
};

function Login({ setToken }: Props) {
	const navigate = useNavigate();
	const alert = useAlert();

	if (sessionStorage.getItem('user') != undefined) {
		return <Navigate to="/dashboard" />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await UserService.login(e.target.email.value, e.target.password.value);
		if (res.data.type === 'valid') {
			setToken(res.data.user);
			navigate('/dashboard');
		} else {
			alert.show('Invalid input');
		}
	};

	return (
		<div className="login">
			<div className="login-container">
				<h1>login</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">email</label>
						<input name="email" type="email" />
					</div>
					<div>
						<label htmlFor="password">password</label>
						<input name="password" type="password" />
					</div>
					<div className="login-submit-container">
						<input type="submit" value="login" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
