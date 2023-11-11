import React, { useState } from 'react';
import bannerimg from '../../../assets/images/banner-side.png';
import $ from 'jquery';


const Banner = props => {
  
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
 
  
  
  

  return(
    
  <div className="banner pt-5">
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
    <div className='row align-items-center'>
            <div className='col-md-6 pl-lg-5'>
        <div className='banner-txt pl-lg-5 ml-lg-5 pt-5 pt-lg-0'>
           <div className="mt-4 welcome-txt">   
                 WELCOME TO
            </div>
           
            <div className='title-txt title-lg mt-3 animate-charcter'>
            MARBLE               
              </div>
            <div className='title-txt prix-txt mt-2'>
               PRIX
            </div>
            
          <div className="launch-btn">
              <a href="#devplan" className="btn btn-outline lp-btn primary-btn" >
             Know More
              </a>
          </div>
        </div> 
         
        </div>
        <div className='col-md-6 pr-0'>
        <div className='text-right mt-5'>
            <img src={bannerimg} className="img-fluid w-50"/>
      </div>
        </div>
</div>
        <div className="position-relative">
        <div className='banner-txt'>
           <div className="mt-4 title-txt">   
         
           <div class="container2">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
   
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
    </div>
            </div>    
          
          </div>
        </div> 


     
    </div>
      </div> 

 
  )
}

export default Banner;
