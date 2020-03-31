import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCxv-lB7cup0cV5A45FNn_H4fKJ8iNuBZE",
  authDomain: "store-clothing-db.firebaseapp.com",
  databaseURL: "https://store-clothing-db.firebaseio.com",
  projectId: "store-clothing-db",
  storageBucket: "store-clothing-db.appspot.com",
  messagingSenderId: "221825231634",
  appId: "1:221825231634:web:9464aa4134ddf9a16f61cb",
  measurementId: "G-VR1NJS8YSD"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
