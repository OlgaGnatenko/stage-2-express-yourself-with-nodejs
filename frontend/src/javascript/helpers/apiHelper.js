// const API_URL =
//   "https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/";

import APP_CONSTANTS from "./constants";

function callApi(endpoint, method) {
  // const url = API_URL + endpoint;
  const url = APP_CONSTANTS.API_URL + endpoint;

  const options = {
    method
  };

  return fetch(url, options)
    .then(response => {
      console.log("FETCH RESPONSE", url, options, response);
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(Error("Failed to load"));
      }
    })
    .catch(error => {
      throw error;
    });
}

export { callApi };
