import { BACKEND_URL } from "../consts";
import { getToken } from "../helpers";

function _get(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${getToken()}`
    }
  })
    .then((respone) => respone.json())
    .then((data) => {
      return data;
    });
}

export function getTasksRequest(query) {
  return _get(`${BACKEND_URL}/task${query ? `?${query}` : ''}`);
}

export function getUserData() {
  return _get(`${BACKEND_URL}/user`);
}
