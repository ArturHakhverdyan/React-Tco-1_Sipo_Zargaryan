import { BACKEND_URL } from "../consts";
import { getToken } from "../helpers";

function get(url) {
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
  return get(`${BACKEND_URL}/task${query ? `?${query}` : ''}`);
}
