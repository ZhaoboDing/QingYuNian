import fetch from 'dva/fetch';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const request = async (url, options) => {
  const res =  await fetch(url, options);
  const checkedRes = checkStatus(res);
  const parsed = await checkedRes.json();
  return parsed;
};

export default request;
