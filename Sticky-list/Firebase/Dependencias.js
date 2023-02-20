import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyASlgSQpq4GZs0y46rz7nrncV_CE0wiMro",
    authDomain: "stickylist-dev001.firebaseapp.com",
    projectId: "stickylist-dev001",
    storageBucket: "stickylist-dev001.appspot.com",
    messagingSenderId: "405206344603",
    appId: "1:405206344603:web:76fdcf44ddcdc8c16f373e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const registroGoogle = () => {
    return signInWithPopup(auth, provider);
}

export const salirDeCuenta = async() => {
    await signOut(auth);
}