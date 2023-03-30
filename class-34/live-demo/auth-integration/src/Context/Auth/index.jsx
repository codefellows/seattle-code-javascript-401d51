import React, { useState } from 'react';
// import testUsers from './lib/users';
import jwt_decode from "jwt-decode";
import axios from 'axios';

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

  const login = async (username, password) => {
    // let user = testUsers[username];
    let config = {
      method: 'post',
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      auth: {username, password},
    }
    let response = await axios(config);
    console.log('user--------', response.data)
    let token = response.data.token
    if(token){
      try {
        _validateToken(token);
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
