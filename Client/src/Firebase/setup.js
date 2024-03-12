import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBM_Bv4ONIjXJINJK949H8GPE9Wx2UTz58",
  authDomain: "shoptrick-2b575.firebaseapp.com",
  projectId: "shoptrick-2b575",
  storageBucket: "shoptrick-2b575.appspot.com",
  messagingSenderId: "111015557699",
  appId: "1:111015557699:web:5826aa2158b805772172f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
