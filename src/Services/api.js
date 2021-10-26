import * as SecureStore from "expo-secure-store";

const requestUrl = process.env.REACT_APP_REQUEST_URL || "https://easyline.ml/api";

const api = async (method, path, data, contentType) => {

  const token = await SecureStore.getItemAsync("token");

  let response;
  if (method != "GET") {
    response = await fetch(requestUrl + path, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": contentType || "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
  } else {
    response = await fetch(requestUrl + path, {
      method,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  if (!response.ok) {
    throw Error((await response.json()).message);
    // return
  }

  let jsonResponse = await response.json();
  return jsonResponse;
};

export default api;
