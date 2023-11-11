import React, { useState } from 'react';
import $ from 'jquery';
import bannerimg from '../../../../assets/images/test-tube-3.gif';
// import Particles from "react-tsparticles"; 
// import { loadFull } from "tsparticles";

const Banner = () => {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };


  return (


    <div className="banner pt-5">
      <div className="main">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>
      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <div className="container-fluid">
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-6 pl-lg-5'>
            <div className='banner-txt pl-lg-5 ml-lg-5 pt-md-0 pt-5'>
              <div className="mt-4 welcome-txt mb-4">
                <i>WELCOME TO</i>
              </div>
              <div className='mb-md-5 mb-0 welcome-banner'>
                <h2 data-text=" X-Elements..."> X-Elements...</h2>
              </div>

              <div className="launch-btn">
                <a href="/Marble_Prix_Pitch_Deck_v1.0.pdf" target="_blank" className="btn btn-outline lp-btn primary-btn" >
                  Know More
                </a>
              </div>
            </div>

          </div>
          <div className='col-md-6 text-right ml-auto'>
            <div className='banner-rhs ml-auto'>
              <img src={bannerimg} className='img-fluid' />
            </div>
          </div>
        </div>


      </div>
    </div>


  )
}

export default Banner;
