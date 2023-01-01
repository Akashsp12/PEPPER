import React, { useState, useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import { getMenuIDAPI } from '../../../API/AddMenuApi'
import {updateMenuApi} from '../../../API/AddMenuApi'




const UpdateProduct = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const inital = {
    Addname: "",
    Price: "",
    FoodType: '',
    ImageUploadURL: '',
    description: ''
  }
  const [UpdateMenuItems, UpdatesetMenuItems] = useState(inital)

  const {
    Addname,
    Price,
    FoodType,
    ImageUploadURL,
    description,
  } = UpdateMenuItems

  const changeHandler = (e) => {
    UpdatesetMenuItems({ ...UpdateMenuItems, [e.target.name]: e.target.value })

  }
  const UpdateHandler = async () => {
    await updateMenuApi(id,UpdateMenuItems)
   navigate('/AdminDash/AdminProductupdate')  
  }
  useEffect(() => {
    MenuId()
  }, [])

  const MenuId = async () => {
    const response = await getMenuIDAPI(id)
    console.log(response.data)
    UpdatesetMenuItems(response.data)
  }


  return (
    <div className='container bg-white'>

      <form method='post' action='' >
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
              <input type="text" className="form-control" id="Addprice" name='Price' value={Price} placeholder="Add menu price" onChange={(e) => changeHandler(e)} />
            </div>
            <br />
            <div>
              <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Food Type :</label>
              <br />
              <select className="custom-select my-1 mr-sm-2 form-control" name="FoodType" value={FoodType} id="inlineFormCustomSelectPref" onChange={(e) => changeHandler(e)} >
                <option selected>...choose..</option>
                <option value="veg">Vegetarian</option>
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

            <button type='submit' className='btn btn-outline-warning' onClick={() => UpdateHandler()}>Update Menu</button>

          </div>
        </div>


      </form>



    </div>
  )
}

export default UpdateProduct