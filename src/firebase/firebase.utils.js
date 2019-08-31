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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;