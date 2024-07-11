import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
  updatePassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";

import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const registerUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };
  const emailVerification = async () => {
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
  const loginUser = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };
  const googleLogin = async () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };
  const facebookLogin = async () => {
    setLoading(true);
    return signInWithRedirect(auth, facebookProvider).finally(() => {
      setLoading(false);
    });
  };
  const logOut = async () => {
    setLoading(true);
    return signOut(auth).finally(() => {
      setLoading(false);
    });
  };

  const forgetPassword = async (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email).finally(() => {
      setLoading(false);
    });
  };
  const verifyForgetPassword = async (code) => {
    setLoading(true);
    return verifyPasswordResetCode(auth, code).finally(() => {
      setLoading(false);
    });
  };
  const confirmForgetPasswordReset = async (code, newPassword) => {
    setLoading(true);
    return confirmPasswordReset(auth, code, newPassword).finally(() => {
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
    facebookLogin,
    logOut,
    updateDisplayName,
    changePassword,
    emailVerification,
    forgetPassword,
    verifyForgetPassword,
    confirmForgetPasswordReset,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
