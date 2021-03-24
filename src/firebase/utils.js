import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC2R9BdPCnbKkEcZXuQoohPgAP47vBFTbQ',
  authDomain: 'grails-42150.firebaseapp.com',
  projectId: 'grails-42150',
  storageBucket: 'grails-42150.appspot.com',
  messagingSenderId: '1065296010475',
  appId: '1:1065296010475:web:a815482f7591397064b2ae',
  measurementId: 'G-GMEGJ9QMN9'
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
