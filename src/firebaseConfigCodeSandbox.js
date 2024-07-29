// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { collectionRef } from "firebase/firestore";
import { ref } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvLawQO_UOctl4uIpvM-nHyMUv20EFNf0",
  authDomain: "fir-frontend-74f54.firebaseapp.com",
  projectId: "fir-frontend-74f54",
  storageBucket: "fir-frontend-74f54.appspot.com",
  messagingSenderId: "989452596283",
  appId: "1:989452596283:web:1122b95fc58f16c45e181e",
  measurementId: "G-9LCWFHRRQM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// var myRef =  firebase.database().ref();
export const myRef = app.database().ref();

// firebaseConfig.database is not a function
// export const myRef = firebaseConfig.database().ref();

// firebaseConfig.database is not a function
// export const myRef = database().ref();

export const shoppingListInDB = ref(database, "shoppingList");
// export const shoppingListInDB = collectionRef(database, "shoppingList");
// in new code it has the following, so maybe it is this?
// export const database = getDatabase(app);

// const analytics = getAnalytics(app);
