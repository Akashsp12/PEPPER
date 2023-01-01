

import React, { useState } from 'react'

// import * as BiIcons from "react-icons/bi";
import '../AdminProductAdd/AdminProductStyle.css'


const { AddMenuAPI } = require('../../../API/AddMenuApi')

const AdminProductAdd = () => {

  const inital = {
    Addname: "",
    AddPrice: "",
    FoodType: '',
    ImageUploadURL: '',
    description: ''
  }

  const [MenuItems, setMenuItems] = useState(inital)

  const {
    Addname,
    AddPrice,
    FoodType,
    ImageUploadURL,
    description,
  } = MenuItems


  const changeHandler = (e) => {
    setMenuItems({ ...MenuItems, [e.target.name]: e.target.value })

  }
  const submitHandler = (e) => {
    e.preventDefault();
    

  }
  const clickHandler = async (e) => {

    await AddMenuAPI(MenuItems)

  }


  return (
    <div>
      <div className="container AdminProdAdd">
        <form method='' action='' onSubmit={() => submitHandler()}>
          <div className="row">

            <div className="col-md-6 ">
              <h2>Add Menus</h2>

              <div className="form-group">
                <label htmlFor="AddName">menu :</label>
                <input type="text" className="form-control" name='Addname' id="Addname" placeholder="Add menu name" value={Addname} onChange={(e) => changeHandler(e)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Addrice">Price :</label>
                <input type="text" className="form-control" id="Addprice" name='AddPrice' value={AddPrice} placeholder="Add menu price" onChange={(e) => changeHandler(e)} />
              </div>
              <br />
              <div>
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Food Type :</label>
                <br />
                <select className="custom-select my-1 mr-sm-2 form-control" name="FoodType" value={FoodType} id="inlineFormCustomSelectPref" onChange={(e) => changeHandler(e)} >
                  <option selected>...choose..</option>
                  <option value='veg'>Vegetarian</option>
                  <option value='non-veg'>Non-Vegetarian</option>
                 
                </select>
              </div>




            </div>
            <div className="col-md-6">
              <br />
              <div>
                <label htmlFor="ImageUploadURL">Upload Image File :</label>
                <input type="text" name='ImageUploadURL' value={ImageUploadURL} className="form-control" id="Addprice" placeholder="Add ImageURL" onChange={(e) => changeHandler(e)} />
              </div>
              <br />
              <div>
                <label className="my-1 mr-2" for="Stock" name='description'>Description :</label>
                <br />
                <textarea name="description" value={description} id="" cols="30" rows="10" className='form-control' onChange={(e) => changeHandler(e)} >

                </textarea>
              </div>


            </div>
            <div className="row mt-5">
              <br />

              <button type='submit' className='btn btn-outline-warning' onClick={() => clickHandler()}> Add Menu</button>

            </div>
          </div>


        </form>


      </div >



    </div>
  )
}

export default AdminProductAdd