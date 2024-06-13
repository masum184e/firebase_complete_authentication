import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  updatePassword
} from "firebase/auth";

import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateDisplayName = (displayName) => {
    setLoading(true);
    // return updateProfile(auth.currentUser, { displayName, photoURL });
    return updateProfile(auth.currentUser, { displayName });
  };
  const changePassword = (newPassword) => {
    setLoading(true);
    return updatePassword(auth.currentUser, newPassword);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoggedInUserData(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loggedInUserData,
    setLoggedInUserData,
    loading,
    setLoading,
    registerUser,
    loginUser,
    googleLogin,
    logOut,
    updateDisplayName,
    changePassword
  };

  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
