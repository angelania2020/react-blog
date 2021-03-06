import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utils/firebase.utils";

const SignIn = () => {
    // When application mounts run useEffect
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchData();
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is sign-in page!</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
        </div>
    );
}

export default SignIn