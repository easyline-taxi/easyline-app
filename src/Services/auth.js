import api from "./api";

export async function signIn(userData) {
  return await api("POST", "/users/login", userData);
};

export async function signUp(userData) {
  await api("POST", "/users/register", userData);
};

export function signOut() {};