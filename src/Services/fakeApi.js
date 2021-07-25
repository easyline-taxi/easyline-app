const requestUrl = "https://reqres.in";

const fakeApi = async (method, path, data, token) => {
  console.log("Using FakeAPI.");

  let response;
  if (method != "GET") {
    response = await fetch(requestUrl + path, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
  } else {
    response = await fetch(requestUrl + path, {
      method,
      headers: {
        "Content-Type": "application/json",
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

export default fakeApi;
