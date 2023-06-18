
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyCu9_AIjZWIUORDxWTg5lOu3NN5mLS4ylI",
  authDomain: "tiktok-jornada-be85c.firebaseapp.com",
  projectId: "tiktok-jornada-be85c",
  storageBucket: "tiktok-jornada-be85c.appspot.com",
  messagingSenderId: "783699866789",
  appId: "1:783699866789:web:a474d42146c0eedea2c94c"
};


const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export default db;