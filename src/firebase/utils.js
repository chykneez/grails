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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserDocument = async (userAuth, data) => {
  // If the user doesn't exist, just return from the function.
  if (!userAuth) return;

  // Query inside firestore for the user document.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // If firebase doesn't have the user document, then create one.
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (error) {
      console.error('Error creating user!', error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (key, documentsToAdd) => {
  const collectionRef = firestore.collection(key);
  const batch = firestore.batch();

  documentsToAdd.forEach(doc => {
    const docRef = collectionRef.doc();
    batch.set(docRef, doc);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const convertedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return convertedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
