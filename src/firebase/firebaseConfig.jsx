import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { getAuth /* onAuthStateChanged  */ } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//require("dotenv").config()

const app = firebase.initializeApp({
  // apiKey: "AIzaSyDxFuYvYPsm53Q_5uvq5GZmy9qefOi7t_U",
  // authDomain: "trip-advisor-2759d.firebaseapp.com",
  // projectId: "trip-advisor-2759d",
  // storageBucket: "trip-advisor-2759d.appspot.com",
  // messagingSenderId: "756306939148",
  // appId: "1:756306939148:web:362df3149468ebde6f8d29",
  // measurementId: "G-5SLMPW8877"

  apiKey: "AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",
  authDomain: "taxis-e44d6.firebaseapp.com",
  projectId: "taxis-e44d6",
  storageBucket: "taxis-e44d6.appspot.com",
  messagingSenderId: "603667662446",
  appId: "1:603667662446:web:0014b763a2a4acca92487f"
});

export const authApp = getAuth(app);
export const firestoreDB = getFirestore(app);
export const storageDocs = getStorage(app);
