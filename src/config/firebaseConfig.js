import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChWRjWVGjg0ROPjNF8hrs1xrPoSGTdj2E",
    authDomain: "reactfront-2ad59.firebaseapp.com",
    databaseURL: "https://reactfront-2ad59.firebaseio.com",
    projectId: "reactfront-2ad59",
    storageBucket: "reactfront-2ad59.appspot.com",
    messagingSenderId: "204732570443",
    appId: "1:204732570443:web:b1424cd3f62b1641b926ce",
    measurementId: "G-54H68X0CB1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;