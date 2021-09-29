import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { auth } from '../firebase/firebaseConfig';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checkIn, setCheckIn] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setCheckIn(false);
		});
	}, [dispatch, checkIn, isLoggedIn]);

	if (checkIn) {
		return <h1>Wait...</h1>;
	}
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={isLoggedIn}
						path="/auth/login"
						component={AuthRouter}
					/>
					<PrivateRoute
						isAuthenticated={isLoggedIn}
						exact
						path="/"
						component={JournalScreen}
					/>

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
