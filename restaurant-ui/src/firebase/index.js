// import firebase from "firebase/app";
// import "firebase/compat/database";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // authDomain: import.meta.env.VITE_FIREBASE_API_ENDPOINT,
    databaseURL: import.meta.env.VITE_FIREBASE_API_URL,
    projectId: 'pizza-restaurant-a5dfb'
}

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDatabase = getDatabase(firebaseApp);

export {
    firebaseApp,
    firebaseDatabase
}
