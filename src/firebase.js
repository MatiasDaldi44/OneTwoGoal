import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDmqPQOjqSh4Gj-WwSDAYvVUF4jSwJD6xw",
    authDomain: "direct-kick.firebaseapp.com",
    databaseURL: "https://direct-kick.firebaseio.com",
    projectId: "direct-kick",
    storageBucket: "direct-kick.appspot.com",
    messagingSenderId: "816918463550",
    appId: "1:816918463550:web:e95dc951439ef4ced3bd6f",
    measurementId: "G-29BFPC14DK"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};