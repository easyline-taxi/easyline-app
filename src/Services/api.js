const requestUrl = process.env.REACT_APP_REQUEST_URL || "http://167.99.100.238:4000";

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

  console.log(await response.json());
  if (!response.ok) {
    throw Error((await response.json()).message);
    // return
  }

  let jsonResponse = await response.json();
  return jsonResponse;
};

export default api;
