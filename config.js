import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCT3iTpcblZY0VgO8zEb8WVQq3hXc3y9Vw",
  authDomain: "book-santa-app-2.firebaseapp.com",
  databaseURL: "https://book-santa-app-2.firebaseio.com",
  projectId: "book-santa-app-2",
  storageBucket: "book-santa-app-2.appspot.com",
  messagingSenderId: "116183331377",
  appId: "1:116183331377:web:df6bc1d23b75235506db10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
