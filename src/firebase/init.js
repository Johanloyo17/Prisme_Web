import firebase from 'firebase';
import firestore from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxAUZYhJSnbFvvmwwEKRzczl7G_caOKq4",
    authDomain: "notes-app-341ea.firebaseapp.com",
    databaseURL: "https://notes-app-341ea.firebaseio.com",
    projectId: "notes-app-341ea",
    storageBucket: "notes-app-341ea.appspot.com",
    messagingSenderId: "27864966213",
    appId: "1:27864966213:web:59283e5fbc79011ae4af2c"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    firebase.firestore()
    export default firebaseApp.firestore(); 
