
import axios from 'axios'

const BaseUrl='http://localhost:4000'

export const AddMenuAPI=async(MenuItems)=>{
    return axios.post(`${BaseUrl}`,MenuItems)

}
export const getmenuItemApi=async()=>{
    return axios.get(`${BaseUrl}/MenuList`)

}
export const getMenuIDAPI=async(id)=>{
    const ObjectId=id || ""
    return axios.get(`${BaseUrl}/Edit/${ObjectId}`)


}
export const updateMenuApi=async(id,UpdateMenuItems)=>{
    return axios.put(`${BaseUrl}/put/${id}`,UpdateMenuItems)

}
