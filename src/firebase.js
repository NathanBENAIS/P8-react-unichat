import firebase from "firebase";
import 'firebase/auth' ;

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCm2kk3T3z-3xtzRg4-lZeO_EY5pgC5Z0I",
    authDomain: "unichat-fac34.firebaseapp.com",
    projectId: "unichat-fac34",
    storageBucket: "unichat-fac34.appspot.com",
    messagingSenderId: "962593892540",
    appId: "1:962593892540:web:1a07123cf5164ad79548b9"
  }).auth();