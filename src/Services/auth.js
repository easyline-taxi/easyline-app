import api from "./api";
import fakeApi from "./fakeApi";

let usingFakeApi = false;

export async function signIn(userData) {
  if (!usingFakeApi) {
    return await api("POST", "/auth/login/", userData);
  } else {
    return await fakeApi("POST", "/api/login/", { ...userData, email: "eve.holt@reqres.in" });
  }
}

export async function signUp(userData) {
  if (!usingFakeApi) {
    return await api("POST", "/auth/register/", userData);
  } else {
    return await fakeApi("POST", "/api/register/", usersData);
  }
}

export function signOut() {}
