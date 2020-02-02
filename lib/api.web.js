import _ from 'lodash';
import baseApi from './baseApi';

const cleanData = data => {
  // Replace any empty strings with NULL. Some API validations will fail.
  if (!data) {
    return null;
  }

  _.each(data, (value, key) => {
    if (typeof value === 'string' && !value.length) {
      data[key] = null;
    }
  });

  return data;
};

const _makeRequest = async (method, url, payload) => {
  // const _token = await token();
  const _token = 'ff';
  const cleanedData = cleanData(payload);
  return baseApi._makeRequest(method, url, cleanedData, _token);
};

const put = (url, payload) => {
  return _makeRequest('PUT', url, payload);
};

const post = (url, payload) => {
  return _makeRequest('POST', url, payload);
};

const get = url => {
  return _makeRequest('GET', url, null);
};

export default {
  ...baseApi,
  _makeRequest,
  put,
  post,
  get,
};
