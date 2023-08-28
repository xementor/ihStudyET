// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC65r_ILfDnkC5EHwjVJx2Onn2C9Uo2u9s",
  authDomain: "ihstudy-b8864.firebaseapp.com",
  projectId: "ihstudy-b8864",
  storageBucket: "ihstudy-b8864.appspot.com",
  messagingSenderId: "640201947971",
  appId: "1:640201947971:web:e2605072d68deade630df6",
  measurementId: "G-Y51TDEE94X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }