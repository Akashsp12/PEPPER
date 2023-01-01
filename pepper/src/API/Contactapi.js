import axios from 'axios'

const ContactUrl='http://localhost:4000/'

export const AddContactApi=async(Contact)=>{
    return axios.post(`${ContactUrl}ContactSubmitted`,Contact)


}
export const getContactApi=async()=>{
    return axios.get(`${ContactUrl}ContactList`)

}
export const getContactId=async(id)=>{
    const ObjectId=id || ""
    return axios.get(`${ContactUrl}${ObjectId}`)

}