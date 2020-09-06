import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAQC4brU2sAOn1iAj1oRrqktFNy_b9BehQ",
    authDomain: "login-registration-auth-62cb6.firebaseapp.com",
    databaseURL: "https://login-registration-auth-62cb6.firebaseio.com",
    projectId: "login-registration-auth-62cb6",
    storageBucket: "login-registration-auth-62cb6.appspot.com",
    messagingSenderId: "695678094468",
    appId: "1:695678094468:web:f82f2ce75a85f5c6ec86d1",
    measurementId: "G-3NDZ0ZY9BH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   export default firebase ;