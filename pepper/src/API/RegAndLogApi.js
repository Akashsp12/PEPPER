
import axios from 'axios'

const BaseUrl='http://localhost:4000/'

export const AddUserApi=async(User)=>{
    return axios.post(`${BaseUrl}User`,User)

}