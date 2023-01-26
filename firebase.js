// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvrnnh1rOwBcpQIjUU8mE3CWJ3iLbiG0c",
  authDomain: "fir-auth-1f528.firebaseapp.com",
  projectId: "fir-auth-1f528",
  storageBucket: "fir-auth-1f528.appspot.com",
  messagingSenderId: "613025575407",
  appId: "1:613025575407:web:7bf5712d071f5dd4fcc61a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };