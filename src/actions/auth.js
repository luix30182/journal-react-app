import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from '@firebase/auth';
import {
	auth,
	firebase,
	googleAuthProvider,
	signInWithPopup,
} from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((e) => {
				Swal.fire('Error', e.message, 'error');
				dispatch(finishLoading());
			});
	};
};

export const starRegisterWithEmaiPasswordName = (email, password, name) => {
	return (dispatch) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(auth.currentUser, { displayName: name });
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				Swal.fire('Error', e.message, 'error');
			});
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

export const startLogOut = () => {
	return async (dispatch) => {
		await auth.signOut();
		dispatch(logout());
	};
};

export const logout = () => ({
	type: types.logout,
});
