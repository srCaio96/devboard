import { auth } from "../../../app/firebase/config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    return result.user;
};

export async function logOut() {
    await signOut(auth);
};