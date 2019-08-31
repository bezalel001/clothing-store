import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCLfA_Mn9OllZsJebnfY7ZB24my8LKTKxw",
  authDomain: "clothing-store-db-4e776.firebaseapp.com",
  databaseURL: "https://clothing-store-db-4e776.firebaseio.com",
  projectId: "clothing-store-db-4e776",
  storageBucket: "",
  messagingSenderId: "651603856059",
  appId: "1:651603856059:web:021091bfd9381abb"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error crreating user', error.message);
    }
  }
  
   return userRef;
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;