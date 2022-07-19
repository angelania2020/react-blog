import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Create DB (Singleton instance)
export const db = getFirestore();

// Method
export const createUserDocumentFromAuth = async (userAuth) => {
    // Gives document reference
    const userDocRef = doc(db, 'users', userAuth.uid);

    // Gives document data, checks if instance exists
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists());


    if (!userSnapshot.exists()) {
        // if user data does not exist
        // create / set the document with the data from userAuth in my collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user: ', error.message);
        }
    }

    // if user data exists
    // return userDocReference
    return userDocRef;
}
