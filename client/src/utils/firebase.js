
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-d6936.firebaseapp.com",
  projectId: "interviewiq-d6936",
  storageBucket: "interviewiq-d6936.firebasestorage.app",
  messagingSenderId: "874582252692",
  appId: "1:874582252692:web:6fa0f8b22502170de8e881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }