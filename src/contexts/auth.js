
import React, { createContext, useContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store';

import * as auth from '../Services/auth'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); // There will be user object data.

  async function signIn(userData) {
    const response = await auth.signIn(userData);

    setUser(true);
    await SecureStore.setItemAsync("token", response.token)
  }

  async function signUp(userData) {
    await auth.signUp(userData);
  }

  async function signOut() {
    setUser(null);
    await SecureStore.deleteItemAsync("token");
  }

  return <AuthContext.Provider value={{signed: !!user, user, signIn, signUp, signOut}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};