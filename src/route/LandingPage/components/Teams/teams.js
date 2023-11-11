// import React, {Component} from "react";
import React from 'react';
import icons1 from '../../../../assets/images/marble-icons/1.png';
import icons2 from '../../../../assets/images/marble-icons/2.png';
import icons3 from '../../../../assets/images/marble-icons/3.png';
import icons4 from '../../../../assets/images/marble-icons/4.png';
import icons5 from '../../../../assets/images/marble-icons/5.png';
import icons6 from '../../../../assets/images/marble-icons/6.png';
import icons7 from '../../../../assets/images/marble-icons/7.png';
import icons8 from '../../../../assets/images/marble-icons/8.png';
import icons9 from '../../../../assets/images/marble-icons/9.png';
import icons10 from '../../../../assets/images/marble-icons/10.png';
import icons11 from '../../../../assets/images/marble-icons/11.png';
import icons12 from '../../../../assets/images/marble-icons/12.png';
import $ from 'jquery';

const Teams = () => {
  $(window).on("load",function() {
    $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    
    $(".fade").each(function() {
    /* Check the location of each desired element */
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    
    /* If the element is completely within bounds of the window, fade it in */
    if (objectBottom < windowBottom) { //object comes into view (scrolling down)
    if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);
    
    }
    } else { //object goes out of view (scrolling up)
    if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
    }
    
    });
    }).scroll(); //invoke scroll-handler on page-load
    });
    
    
    const inViewport = (entries, observer) => {
    entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
    };
    
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};
    
    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
    });
    
    if ('IntersectionObserver' in window)  {
    // Recommended: make this selector more specific with a `data-animate-on-visible`
    let elements = document.querySelectorAll("svg");
    let observer = new IntersectionObserver(entries => {
    // quit early if users wants Reduced Motion
    let mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if(!mediaQuery.matches) {
    return;
    }
    for(let entry of entries) {
    if(!entry.isIntersecting) {
      continue;
    }
    // Look for <animate> or <animateTransform> that need JS to start
    let beginElements = entry.target.querySelectorAll(`:scope [begin="indefinite"]`);
    for(let beginEl of beginElements) {
      beginEl.beginElement();
      // Unobserve so we don’t re-animate the dead
      // observer.unobserve(entry.target);
    }
    }
    },
    {    threshold: .5
    // 50% of element must be visible
    });
    for(let elem of elements) {
    // console.log(elem);
    observer.observe(elem);
    }
    }
    return (
      
      <div className="container">
          <div className="section-effect teams">
          <div className="container-fluid pb-5 mb-1">
              <div className='title-style'>
              <div className='text-uppercase text-upper'>MARBLE PRIX</div>
               <h2>Development</h2>
              </div> 
              <div className="row align-items-center mt-5">       
        <div className="col-lg-7 mt-lg-0 pt-lg-0" data-animated="0">
          {/* <div className='title-style pb-1 mb-3'>
             <h2 className="text-white">What is Marble Prix</h2>
          </div>          */}
            <div className="mb-4 pr-lg-3">
                <p style={{textAlign: "justify"}}> So far the team have built up two Tracks in the name of Satoshi and Vitalik to honour the legends in crypto space, few more on the construction. The aim and objective of the ecosystem utility is to allow users to participate in Marbleprix race tracks based on live race streams on the v1, then on the v2 Meta races and v3 simulation races. The fundamental of the v1 live racing game is that the users will be able to participate in the betting ecosystem which operate 4 races per day at the start with low to high stake racing slots. There will be 7 Marbles of same size and different colour participate in each races. Users should posses min of certain $MARBLEX coins to access the app and participate in the race and to claim the wining too. Each Round lasts for 2 hours. 1 hour for betting participation open round, next 1 hour is for 10 laps to run, last 1 hour for race finalization and price settlements. The Race track is constructed using high profile 3d printing materials, the finish line will be captured with sports high speed sensor cameras, the race will be live streamed with unix clock streamed in a big Television from the race studio. This is a new kind of gaming platform, where the live race gonna integrate with blockchain. We have our own inhouse MarblePrix team Marbles in NFT's, staking, DAO all will be introduced once the racing version 1 dapp kicks off.</p>
            </div>
           
      </div> 
      <div className="col-lg-5">
          <div className="d-flex justify-content-center">
          <div className='d-flex flex-wrap marble-developement'>
            <img src={icons1} width="150" className='float' data-inviewport="slide-up-particle"/>
            <img src={icons2} width="150" className='float' data-inviewport="slide-up-particle"/>
            <img src={icons3} width="150" className='float' data-inviewport="slide-up-particle"/>
            <img src={icons4} width="150" className='float'/>
            <img src={icons6} width="150" className='loading'/>
              <img src={icons7} width="150" className='loading'/>
              <img src={icons8} width="150" className='loading'/>
              <img src={icons9} width="150" className='loading'/>
              <img src={icons2} width="150" className='loading'/>
        </div>
        </div>
        {/* <div className="d-flex justify-content-center mb-3">
            <div className='d-flex flex-wrap marble-developement'>
              
              </div>
          </div> */}
        </div>
      </div>
</div>
        
    </div>
        
      </div>
    );
}

export default Teams;
