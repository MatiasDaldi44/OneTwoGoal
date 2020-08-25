import firebase from "firebase";
import "firebase/auth";



export const app = firebase.initializeApp({
    apiKey: "AIzaSyDmqPQOjqSh4Gj-WwSDAYvVUF4jSwJD6xw",
    authDomain: "direct-kick.firebaseapp.com",
    databaseURL: "https://direct-kick.firebaseio.com",
    projectId: "direct-kick",
    storageBucket: "direct-kick.appspot.com",
    messagingSenderId: "816918463550",
    appId: "1:816918463550:web:e95dc951439ef4ced3bd6f",
    measurementId: "G-29BFPC14DK"
  });

export default app;