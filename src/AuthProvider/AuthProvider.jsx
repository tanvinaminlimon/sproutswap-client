import { createContext, useState, useContext,useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
     // Initialize user info
     useEffect(() => {
        const auth = getAuth(); // Initialize Firebase Auth
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Update userInfo with Google user data
                setUserInfo(user);
            } else {
                setUserInfo(null); // No user logged in
            }
        });

        // Cleanup the listener
        return () => unsubscribe();
    }, []);


    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};