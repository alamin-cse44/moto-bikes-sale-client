import React, { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

// initial the firebase app
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, name, location, history) =>{
      setIsLoading(true);
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => { 
        const newUser = {email, displayName: name};
        setUser(newUser);
        // save user to the database
        saveUser(email, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {
          
        });
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
    }

    const loginUser = (email,password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
    }

    const logOut = () => {
      setIsLoading(true);
      signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
    }

    const signWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          // save user to the database
         saveUser(user.email, user.displayName, 'PUT');
         const destination = location?.state?.from || '/';
         history.replace(destination);
        setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }


    // observe user state 
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    } ,[auth])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://gentle-coast-64349.herokuapp.com/users', {
          method: method,
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    useEffect( () => {
      fetch(`https://gentle-coast-64349.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    } ,[user.email])
    
    return {
        user,
        admin,
        registerUser,
        loginUser,
        authError,
        isLoading,
        signWithGoogle,
        logOut
    };
};

export default useFirebase;