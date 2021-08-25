const requestUrl = process.env.REACT_APP_REQUEST_URL || "http://206.189.114.185:8000/api";

const api = async (method, path, data, token) => {
    let response;
  if (method != "GET") {
     response = await fetch(requestUrl + path, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(data),
    });
  }else{
    response = await fetch(requestUrl + path, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
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
