/* eslint-disable no-console */

const apiURL = 'http://127.0.0.1:5000/';

const _makeRequest = async (method, url, payload, _token) => {
  const request = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return fetch(apiURL + url)
    .then(response => response.json())
    .then(responseJson => {
      console.log;
      // return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
    });
};

export default {
  _makeRequest,
};
