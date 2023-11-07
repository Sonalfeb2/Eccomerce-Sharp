import React from "react";
import { useState } from "react";
const AuthContext = React.createContext({
  tokenId: "",
  userLoggedIn: false,
  login: id=>{},
  logout: id=>{}
});

export const AuthContextProvider = (props) => {
  const idTokenLocal = localStorage.getItem('idToken');
  const [tokenId, setTokenId] = useState(idTokenLocal);
  
  const loginHandler = id => {
    localStorage.setItem('idToken', JSON.stringify(id));
    setTokenId(id);
  };
  const logoutHandler = id =>{
    localStorage.clear('idToken')
    setTokenId (null)
  }
  
  const userLoggedInHanlder = idTokenLocal?true:false
  const authValue = {
    tokenId,
    userLoggedIn: userLoggedInHanlder,
    login :loginHandler,
    logout: logoutHandler
  };
  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;