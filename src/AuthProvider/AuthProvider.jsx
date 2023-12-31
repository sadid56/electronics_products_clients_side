import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [isDark, setIsDark] = useState(true)

    const toggleIsDark =()=>{
        setIsDark(!isDark)
        console.log(!isDark);
      }
      


    //google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //create user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update profile
    const profileUpdate =(name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    //signIn
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

   useEffect(()=>{
    const unSubscibe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser)
    })
    return ()=> unSubscibe()
   },[])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        profileUpdate,
        signIn,
        logOut,
        toggleIsDark,
        isDark
    }
    return ( 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;