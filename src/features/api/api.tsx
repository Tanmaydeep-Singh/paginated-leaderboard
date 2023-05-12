import axios from "axios";

export function getUserData() {
    return axios.get("")
    .then(res => res.data);
}


export function createUser(data: any ) {
    return axios.post("", {data})
    .then(res => res.data);
}