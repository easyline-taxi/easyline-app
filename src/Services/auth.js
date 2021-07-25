import api from "./api";
import fakeApi from "./fakeApi";

let usingFakeApi = true;

export async function signIn(userData) {
  if (!usingFakeApi) {
    return await api("POST", "/users/login", userData);
  } else {
    return await fakeApi("POST", "/api/login", { ...userData, email: "eve.holt@reqres.in" });
  }
}

export async function signUp(userData) {
  if (!usingFakeApi) {
    return await api("POST", "/users/register", userData);
  } else {
    return await fakeApi("POST", "/api/register", usersData);
  }
}

export function signOut() {}
