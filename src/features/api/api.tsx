import axios from "axios";

export function getUserData() {
    return axios.get("https://my-json-server.typicode.com/Tanmaydeep-Singh/paginated-leaderboard/db")
    .then(res => { console.log("JSON",res.data);});
}


export function createUser(data: any ) {
    return axios.post("", {data})
    .then(res => res.data);
}