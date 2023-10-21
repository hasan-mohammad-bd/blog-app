// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-804f5.firebaseapp.com",
  projectId: "blog-app-804f5",
  storageBucket: "blog-app-804f5.appspot.com",
  messagingSenderId: "464228426361",
  appId: "1:464228426361:web:1d490c9aca1c4853b66aa8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);