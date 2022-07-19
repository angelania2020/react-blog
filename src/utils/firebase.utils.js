import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO7CTTVwH3FeKwlBz5Z09O8UkEfXjxziw",
    authDomain: "angelina-web-db.firebaseapp.com",
    projectId: "angelina-web-db",
    storageBucket: "angelina-web-db.appspot.com",
    messagingSenderId: "344052430612",
    appId: "1:344052430612:web:08c471f09ffeea4fd2f401"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize googleProvider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
