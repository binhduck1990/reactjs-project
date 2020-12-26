import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password, cb) => {
    fetch('http://localhost:4000/api/user/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,password
        }),
      })
      .then(response => response.json())
      .then(data => {
        setUser(data.user)
        localStorage.setItem('token', data.token)
        cb()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const signup = (email, password) => {

  };

  const signout = () => {

  };

  const sendPasswordResetEmail = email => {

  };

  const confirmPasswordReset = (code, password) => {

  };
  
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}