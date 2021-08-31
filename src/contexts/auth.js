
import React, { createContext, useContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store';

import api from "../Services/api";
import * as auth from '../Services/auth'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); // There will be user object data.

  async function signIn(userAuthData) {
    await SecureStore.deleteItemAsync("token");
    const { token } = await auth.signIn(userAuthData);

    await SecureStore.setItemAsync("token", token)
    await setUserData();
  }

  async function setUserData() {
    const { user_data } = await api("GET", "/user/");
    setUser(user_data);
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