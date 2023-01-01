
import '../Aboutus/AboutUsStyle.css'


import React from 'react'

const AboutUs = () => {
  return (
   
    <>
        <br /><br />
        <div className="container Abtpge">
          <div className="row">
            <div className="col-md-6 ">
              <img src="Aboutusimage1.jpg" alt="" className='img-fluid Abtpgeimg'/>
            </div>
            <div className="col-md-6  Abtpge2">
              <br />
            <h2>About Us</h2>
              <p>
               
                Since 2018, we have been delivering the home waali feeling to your doorstep
                </p>
                <p>PEPPER Foods are,delicious ,flavorful, familiar, and reassuring. Carefully packed with the freshness and nutrition of locally sourced fresh ingredients.</p>
                <p><strong>We aim to create and serve each meal with lots of love so that you know, wherever you are, you can feel closer to home.</strong></p>
                <h2>Packed with love and care</h2>
                <p>For you, and the environment:
                  <ul>
                    <li>Polypropylene trays and containers - <span className='AbtpgeSpan'>100% recyclable</span></li>
                    <li>Wooden cutlery and paper bags</li>
                    <li>100% recyclable</li>
                    <li>100% recyclable</li>
                  </ul>
                </p>
                <p>
                  <ul>
                    Meal packaging :
                    <li>Packed in trays and containers</li>
                    <li>Tamper-proof paper bag</li>
                    <li>Retains product temperature, flavor, and aroma</li>
                    <li>Served neatly and hygienically for premium food sensory experiences</li>
                  </ul>
                </p>
            </div>
          </div>
        </div>


      </>
  )
}

export default AboutUs
