import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCuhNFr9f24pX2fYetMm-sjK9j0v6ZgpMk",
    authDomain: "instagram-5453a.firebaseapp.com",
    projectId: "instagram-5453a",
    storageBucket: "instagram-5453a.appspot.com",
    messagingSenderId: "1083330886344",
    appId: "1:1083330886344:web:590d5deab868135007c3fd"

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };
