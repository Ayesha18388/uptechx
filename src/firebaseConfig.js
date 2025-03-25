import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1InYgn934zsK-zVYHbeSkwn3PcrpcbLY",
  authDomain: "http://uptechx-d31a8.firebaseapp.com",
  projectId: "uptechx-d31a8",
  storageBucket: "http://uptechx-d31a8.firebasestorage.app",
  messagingSenderId: "811608436000",
  appId: "1:811608436000:web:38f3f67f4717ff40673b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

