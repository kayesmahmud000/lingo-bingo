import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader ,setLoader]=useState(true);
    const auth = getAuth(app)
    const provider=new GoogleAuthProvider()

    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

const loginWithGoogle=()=>{
   return signInWithPopup(auth,provider)
}

    const loginWithPassword = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser=()=>{
        setLoader(true)
        signOut(auth)

    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail( auth, email);
      };



    const updateProfileUser=(updateData)=>{
      return  updateProfile(auth.currentUser, updateData)
    }

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoader(false)
            })

            return () => {
                unsubscribe()
            }
        }, [])
    const authInfo = {
        user,
        setUser,
        createNewUser,
        loginWithPassword,
        logOutUser,
        loader,
        loginWithGoogle,
        updateProfileUser,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;