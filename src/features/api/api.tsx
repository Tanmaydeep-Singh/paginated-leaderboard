import axios from 'axios'

export const getUserData = async (): Promise<any> => {
  return await axios.get('https://my-json-server.typicode.com/Tanmaydeep-Singh/paginated-leaderboard/db')
    .then(res => res)
}

export const createUser = async (data: any): Promise<any> => {
  await axios.post('https://my-json-server.typicode.com/Tanmaydeep-Singh/paginated-leaderboard/db', { data })
    .then(res => res.data)
}
