import { BACKEND_URL } from "../consts"

const get = (url) => {
    fetch(url)
        .then((res) => { res.json() })
        .then((data) => { return data })
}

export const GetTasks = () => {
return  get(`${BACKEND_URL}/tasks`)
}
