// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEOB_ffoOENPjuC48Ow9pQUTaS_CbZhyo",
  authDomain: "netflix-clone-37761.firebaseapp.com",
  projectId: "netflix-clone-37761",
  storageBucket: "netflix-clone-37761.appspot.com",
  messagingSenderId: "716748079056",
  appId: "1:716748079056:web:fb475411446a7e6ae943d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
