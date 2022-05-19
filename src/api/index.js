import { BACKEND_URL } from "../consts";

function get(url) {
  return fetch(url)
    .then((respone) => respone.json())
    .then((data) => {
      return data;
    });
}
export function getTasks() {
  return get(`${BACKEND_URL}/task`);
}