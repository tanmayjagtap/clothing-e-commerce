import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIaJGn_cqMMARVnEM1seUt-EO1nB8atK8",
    authDomain: "clothing-db-bb439.firebaseapp.com",
    projectId: "clothing-db-bb439",
    storageBucket: "clothing-db-bb439.appspot.com",
    messagingSenderId: "312617697026",
    appId: "1:312617697026:web:3152c5a5eadabcafd00c1b",
    measurementId: "G-F96FL5ND16"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;