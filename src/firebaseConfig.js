import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAyfCE8aRjSLtEw-7UuKm2mo8qgUDGqRpA",
  
    authDomain: "hw2todolist-f3dff.firebaseapp.com",
  
    projectId: "hw2todolist-f3dff",
  
    storageBucket: "hw2todolist-f3dff.appspot.com",
  
    messagingSenderId: "641342244496",
  
    appId: "1:641342244496:web:ab699f25926c9ba389fa15"
  
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initalize components
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();