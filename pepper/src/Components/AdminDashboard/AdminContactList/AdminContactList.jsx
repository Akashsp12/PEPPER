import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MdDelete } from "react-icons/md";

import './AdminContactStyles.css'

const { getContactApi } = require('../../../API/Contactapi')
const {getContactId}=require('../../../API/Contactapi')


const AdminContactList = () => {
 
  const id=window.location.pathname

  const [Contacts,setContacts] = useState([])

  useEffect(() => {
    getAllData()
  }, [])

  useEffect(() => {
     getId()
  }, [])


  
  const  getAllData = async () => {
    const response = await getContactApi()
    setContacts(response.data)

  }
  const getId=async()=>{
    var response=await getContactId(id)
    setContacts(response.data)

}



  return (
    <>
      <br />
      <div class="table-responsive">
        <table class="table MenuUpdate"  >
          
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>

          </tr>
          {
            Contacts.map(Con =>
              <tr>
                <td>{Con.ContactName}</td>
                <td>{Con.ContactEmail} </td>
                <td>{Con.ContactPhone}</td>
                <td>{Con.ContactMsg} </td>


                <td> <button class='tableBtn'><Link to={`/AdminDash/AdminContactList/${Con._id}`}  ><MdDelete className='tableBtn' /></Link></button> </td>

              </tr>
            )
          }




        </table>
      </div>













    </>
  )
}

export default AdminContactList