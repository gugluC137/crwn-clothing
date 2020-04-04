import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAy_er_mOeusc5H84f-dhBAkclDaAoeFzA",
	authDomain: "crwn-db-226c9.firebaseapp.com",
	databaseURL: "https://crwn-db-226c9.firebaseio.com",
	projectId: "crwn-db-226c9",
	storageBucket: "crwn-db-226c9.appspot.com",
	messagingSenderId: "768538432515",
	appId: "1:768538432515:web:e98dd2244c0b32c972aa36",
	measurementId: "G-ZQRVVD8E21",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export default firebase;
