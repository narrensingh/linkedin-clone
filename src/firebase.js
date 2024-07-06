// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4FP-3rkKWb46PAj_pOjYTDWGrz-v4xC4",
    authDomain: "linkedin-clone-f32c1.firebaseapp.com",
    projectId: "linkedin-clone-f32c1",
    storageBucket: "linkedin-clone-f32c1.appspot.com",
    messagingSenderId: "110435146879",
    appId: "1:110435146879:web:d84159590003daae74b34a",
    measurementId: "G-NV5H0B4SBE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) 
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db,auth}