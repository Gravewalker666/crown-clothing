import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCH1nXSw2k3PtrSPehItIdeKbevjztTFyQ",
    authDomain: "crown-database-6f993.firebaseapp.com",
    databaseURL: "https://crown-database-6f993.firebaseio.com",
    projectId: "crown-database-6f993",
    storageBucket: "crown-database-6f993.appspot.com",
    messagingSenderId: "393538696858",
    appId: "1:393538696858:web:1ecb68c0aa82aa722cd123",
    measurementId: "G-CDPXDJNEXD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
