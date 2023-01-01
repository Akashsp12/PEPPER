
import '../ProductPage/ProductpageStyle.css'
import { getmenuItemApi } from '../../API/AddMenuApi'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
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
            <div className="GridContainer">

                {
                    MenuItems.map(list =>

                        <div className="cards">
                            <div className="card-img-top">
                                <img src={list.ImageUploadURL} alt='' className='Card-img' />
                            </div>
                            <div className="">
                                <p>{list.Addname}</p>
                            </div>
                            <div className="">
                                <p className='price'>{list.Price}</p>
                            </div>
                            <div className="">
                                <p className='discription'>{list.description}</p>
                            </div>
                            <div className="">
                               <button className='btn btn-outline-primary'>Add to Cart</button>
                            </div>
                        </div>
                    )
                }


            </div>



        </>
    )
}

export default ProductList