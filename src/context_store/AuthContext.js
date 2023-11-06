import React from "react";
import { useState } from "react";
const AuthContext = React.createContext({
  tokenId: "",
  userLoggedIn: false,
  login: id=>{},
  logout: id=>{}
});

export const AuthContextProvider = (props) => {
  const [tokenId, setTokenId] = useState(null);
  const userLoggedInHanlder = !!tokenId;
  const loginHandler = id => {
    setTokenId(id);
  };
  const logoutHandler = id =>{
    setTokenId (null)
  }
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