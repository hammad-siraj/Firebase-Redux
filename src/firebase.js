import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDGGuv4__cUXvprab5JNIF07NSacw40dzY",
    authDomain: "todo-app-5f8b4.firebaseapp.com",
    databaseURL: "https://todo-app-5f8b4.firebaseio.com",
    projectId: "todo-app-5f8b4",
    storageBucket: "todo-app-5f8b4.appspot.com",
    messagingSenderId: "111189468271",
    appId: "1:111189468271:web:bcdbb9acec6ed709d5199a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const Db = firebase.database().ref("TODO");