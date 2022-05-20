import { BACKEND_URL } from "../consts";

function get(url) {
  return fetch(url)
    .then((respone) => respone.json())
    .then((data) => {
      return data;
    });
}
export function GetTasks() {
  return get(`${BACKEND_URL}/task`);
}