import React, { createContext } from 'react'

import api from '../Services/auth'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  async function Login() {
    try {
      const response = await api.post('/users/login', {
        email: "",
        senha: "",
      });
      console.log(response.data)
    } catch (e) {
      console.log(e) 
    }
    
  }

  return <AuthContext.Provider value={{signed: true, Login}}>{children}</AuthContext.Provider>;
}

export default AuthContext;