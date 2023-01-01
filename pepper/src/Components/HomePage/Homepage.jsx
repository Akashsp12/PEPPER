import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as GOIcons from "react-icons/go";
import  OurServices from '../OurServices/OurServices'
import AboutUs from '../Aboutus/AboutUs';
// import NewletterSub from '../NewLetter/NewletterSub';
import './HomeStyle.css'


export default class Homepage extends Component {
  render() {
    return (
      <>
      <div className='HomeView '>
        <div className='HomeDisplay '>
          <h3>delicious  food</h3>
          <p>A pinch of passion in every dish.</p>
          <div className='HomeButton d-flex justify-content-center mt-4'  >
          <Link to='/menu' className='Signlink text-decoration-none ' type='button'><GOIcons.GoPackage className='Sign' /> &nbsp; Order Now
              </Link>
             
          </div>
        </div>
      </div>
<div>
  <br/>
<OurServices/>
<br />
<AboutUs/>
<br />
{/* <NewletterSub/> */}
</div>

      
      
      </>
    )
  }
}
