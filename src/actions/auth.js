import {
	auth,
	googleAuthProvider,
	signInWithPopup,
} from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(151515, 'Natasha'));
		}, 300);
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
			dispatch(login(user.uid, user.displayName));
		});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: { uid, displayName },
});
