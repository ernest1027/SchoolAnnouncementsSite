import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLjLBFt0RGmG49K33UVk-4o-C_5H-Thj0",
    authDomain: "school-app-ffaad.firebaseapp.com",
    databaseURL: "https://school-app-ffaad.firebaseio.com",
    projectId: "school-app-ffaad",
    storageBucket: "school-app-ffaad.appspot.com",
    messagingSenderId: "425230354072",
    appId: "1:425230354072:web:f589a567ddab9f0bd3f2ed"
})

const db = firebaseApp.firestore();

export default db;
