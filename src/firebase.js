// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCT_GReR_RbCtxEPbVbs3IDQc9ETwcThDE",
//   authDomain: "bookstore-365c0.firebaseapp.com",
//   projectId: "bookstore-365c0",
//   storageBucket: "bookstore-365c0.appspot.com",
//   messagingSenderId: "932827198829",
//   appId: "1:932827198829:web:33f09a2c675981ca6cd664",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
