import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.init";
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [ user, setUser] = useState('')

   const createUser = (userEmail , userPassword) => {
    return createUserWithEmailAndPassword( auth , userEmail , userPassword) 
   }

   const signInUser = (userEmail , userPassword) => {
    return signInWithEmailAndPassword(auth , userEmail , userPassword)
   }
   
   const signOutUser = () => {
    return signOut(auth) 
   }

   useEffect(() =>{
        onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser) ;
        })
   }, [])
    const authInfo = {
         createUser ,
         signInUser ,
         signOutUser ,
         user ,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children : PropTypes.func ,
}