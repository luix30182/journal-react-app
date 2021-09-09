import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDDWXQTMlS7eN5WSHyk5dYhIr8cjy4kWl8',
	authDomain: 'marioplan-8d013.firebaseapp.com',
	databaseURL: 'https://marioplan-8d013.firebaseio.com',
	projectId: 'marioplan-8d013',
	storageBucket: 'marioplan-8d013.appspot.com',
	messagingSenderId: '739690477518',
	appId: '1:739690477518:web:847db5508b22fe2580dd9f',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, signInWithPopup, firebase, auth };
