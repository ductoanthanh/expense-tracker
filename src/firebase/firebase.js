import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCK-itMOsYWHXmQM6hAmSUbCVZQfcZwZ9s",
    authDomain: "expense-tracker-ac86c.firebaseapp.com",
    databaseURL: "https://expense-tracker-ac86c.firebaseio.com",
    projectId: "expense-tracker-ac86c",
    storageBucket: "expense-tracker-ac86c.appspot.com",
    messagingSenderId: "218474150336"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

