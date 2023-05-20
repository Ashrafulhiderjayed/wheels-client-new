// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiZU57tTWZoGHmkIucrVUruGSafL1RnVU",
  authDomain: "toy-car-2dedb.firebaseapp.com",
  projectId: "toy-car-2dedb",
  storageBucket: "toy-car-2dedb.appspot.com",
  messagingSenderId: "573606720647",
  appId: "1:573606720647:web:beafa9e87dd1b1b00a3422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;