import React, { Component } from 'react';
import './OurServiceStyles.css'


export default class OurServices extends Component {
  render() {
    return (
      <div classname='OurServices  '>
        <p className='text-white text-center display-4'>Why choose us</p>

        <p className='text-white text-center '>This is what makes Our Food different</p>

        <div className="container">

          <div className="row ">
            <div className="col-md-4 ourSerDiv bg-white mt-2" ><img src="/easytouse.png" alt="" className='p-1 img-fluid' />
              <h3 className='SerVH3'>Easy To Order</h3>
             
              <p class='SerVP'>
                Order food at a single click and <br /> select all food to order at any point <br /> in time and  at ease and comfort
              </p></div>
            <br />
           
            <div className="col-md-4 ourSerDiv bg-white mt-2"><img src="delivery (2).png" alt="" className='delivery img-fluid'/>
            <br />
              <h3 className='pt-2 SerVH3'>Fast Delivery</h3>
              <p class='SerVP'>
                Food delivery fast and reliable and <br /> get delivered at deliivery time and<br /> location  any day, any time
              </p></div>
        
           
            <div className="col-md-4 ourSerDiv bg-white mt-2">
            <img src="/Quality.png" alt="" className='img-fluid' />
              <br />
              <h3 className='SerVH3'>100% quality</h3>
              <p class='SerVP'>We provide quality food for you <br /> and your loved ones for health and so onnnnnn and for wellness</p>
            </div>
          
          </div>

        </div>
      </div>
    )
  }
}
