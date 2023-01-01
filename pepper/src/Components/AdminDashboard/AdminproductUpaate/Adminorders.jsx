import React, { useEffect, useState } from 'react'
import {Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { getmenuItemApi } from '../../../API/AddMenuApi'
import './AdminOrderStyles.css'

const Adminorders = () => {
  const [MenuItems, setMenuItems] = useState([])

  useEffect(() => {
    getAllData()
  }, [])
  const getAllData = async () => {
    const response = await getmenuItemApi()
    setMenuItems(response.data)

  }


  return (
    <>
      <br />
      <div class="table-responsive">
        <table class="table MenuUpdate"  >
          <tr>
            <th>Menu Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>FoodType</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
          {
            MenuItems.map(list =>
              <tr>
                <td>{list.Addname}</td>
                <td>{list.Price} </td>
                <td>{list.description}</td>
                <td>{list.FoodType} </td>
                <td> <button class='tableBtn'><NavLink to={`/Edit/${list._id}`}  ><FiEdit className='tableBtn' /></NavLink>
                </button> </td>
                <td> <button class='tableBtn' ><MdDelete className='tableBtn' /></button> </td>

              </tr>

            )
          }




        </table>
        <Routes>
                <Route path='/Edit/:id' element={<Navigate to='/Edit/:id'></Navigate>}></Route>
            </Routes>
      </div>













    </>
  )
}

export default Adminorders