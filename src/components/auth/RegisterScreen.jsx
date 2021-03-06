import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { starRegisterWithEmaiPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
	const [values, handleInputChange] = useForm({
		name: 'Mario',
		email: 'luismario@gmail.com',
		password: '123123',
		confirm: '123123',
	});

	const { name, email, password, confirm } = values;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(starRegisterWithEmaiPasswordName(email, password, name));
		}
	};

	const dispatch = useDispatch();
	const msgError = useSelector((state) => state.ui.msgError);
	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Invalid email'));
			return false;
		} else if (password !== confirm || password.length < 5) {
			dispatch(
				setError(
					'Password should be as least 6 characters and match each other'
				)
			);
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form onSubmit={handleRegister}>
				{msgError && <div className="auth__alert-error">{msgError}</div>}
				<input
					className="auth__input"
					type="text"
					placeholder="Name"
					name="name"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="email"
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Confirm password"
					name="confirm"
					value={confirm}
					onChange={handleInputChange}
				/>
				<button className="btn btn-primary btn-block mb-5" type="submit">
					Login
				</button>

				<Link className="link" to="/auth/login">
					Already registered?
				</Link>
			</form>
		</>
	);
};
