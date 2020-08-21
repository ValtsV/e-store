import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNIaNrSdB1uBbnApZIBkPQmoMzo9ClK_8",
  authDomain: "e-store-db-8d63f.firebaseapp.com",
  databaseURL: "https://e-store-db-8d63f.firebaseio.com",
  projectId: "e-store-db-8d63f",
  storageBucket: "e-store-db-8d63f.appspot.com",
  messagingSenderId: "487651722224",
  appId: "1:487651722224:web:d815fab81af15b21039335",
  measurementId: "G-CNTX46B81Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
