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
  updatePassword,
  sendEmailVerification,
  sendPasswordResetEmail
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
  const emailVerification = async() => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser).finally(() => {
      setLoading(false);
    });
  };
  const updateDisplayName = async (displayName) => {
    setLoading(true);
    // return updateProfile(auth.currentUser, { displayName, photoURL });
    return updateProfile(auth.currentUser, { displayName }).finally(() => {
      setLoading(false);
    });
  };
  const changePassword = async (newPassword) => {
    setLoading(true);
    return updatePassword(auth.currentUser, newPassword).finally(() => {
      setLoading(false);
    });
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
  const forgetPassword = async(email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email).finally(() => {
      setLoading(false);
    });
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
    changePassword,
    emailVerification,
    forgetPassword
  };

  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
