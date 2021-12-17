// Import the functions you need from the SDKs you need
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAr3r7QoCR3DZZPQ323vLEXXlJq0L8yFRk",
    authDomain: "shopping-3b986.firebaseapp.com",
    projectId: "shopping-3b986",
    storageBucket: "shopping-3b986.appspot.com",
    messagingSenderId: "424301704539",
    appId: "1:424301704539:web:266ca44d052b62fda9567e",
    measurementId: "G-8Y0J0G9F62"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire