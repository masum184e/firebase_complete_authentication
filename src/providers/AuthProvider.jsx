import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoggedInUserData(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        loggedInUserData,
        setLoggedInUserData,
        loading,
        setLoading
    }

    return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;