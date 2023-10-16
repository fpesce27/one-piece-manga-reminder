// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv3SlNqskeceuTnLvcAqf0Ujddi9jrnkg",
  authDomain: "one-piece-manga-reminder.firebaseapp.com",
  projectId: "one-piece-manga-reminder",
  storageBucket: "one-piece-manga-reminder.appspot.com",
  messagingSenderId: "551932712798",
  appId: "1:551932712798:web:c826355c790d6494c061cf",
  measurementId: "G-K6TJGFCLJ7"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();

export default db;