import React, { useState } from 'react';
import testUsers from './lib/users';
import jwt_decode from "jwt-decode";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
// create some initial state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const _validateToken = (token) => {
    try{
      let validUser = jwt_decode(token); // does this fail appropriately?
      console.log('validUser', validUser);
      if (validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged in!');
      }
    }catch(e){
      setError(e);
      console.log(e);
    }
  };

  const login = (username, password) => {
    let user = testUsers[username];
    if(user && user.password === password){
      try {
        _validateToken(user.token);
      } catch(e){
        setError(e);
        console.log(e);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };


  const values = {
    isLoggedIn,
    user,
    error, // does this ALWAYS make sense?
    login,
    logout,
    can,
  }
// use component to "wrap" the children and provide context
return (
  <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
)
};

export default AuthProvider;
