import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBIzXGENJvPa--bpof3P8uTB-cQ4d0QW2k",
  authDomain: "blood-donation-app-96ebb.firebaseapp.com",
  projectId: "blood-donation-app-96ebb",
  storageBucket: "blood-donation-app-96ebb.appspot.com",
  messagingSenderId: "336632804673",
  appId: "1:336632804673:web:1108ad537f8e853b369dc0",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleAuthProvider }
