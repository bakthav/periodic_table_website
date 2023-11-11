import React from 'react';
import tokenomicsImg from '../../../../assets/images/test-tube.gif';
import $ from 'jquery';
// import React, { Component } from "react";


const Tokenomics = () =>{
  $(window).on("load", function () {
    $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();

      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);

          }
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
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

  if ('IntersectionObserver' in window) {
    // Recommended: make this selector more specific with a `data-animate-on-visible`
    let elements = document.querySelectorAll("svg");
    let observer = new IntersectionObserver(entries => {
      // quit early if users wants Reduced Motion
      let mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
      if (!mediaQuery.matches) {
        return;
      }
      for (let entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        // Look for <animate> or <animateTransform> that need JS to start
        let beginElements = entry.target.querySelectorAll(`:scope [begin="indefinite"]`);
        for (let beginEl of beginElements) {
          beginEl.beginElement();
          // Unobserve so we don’t re-animate the dead
          // observer.unobserve(entry.target);
        }
      }
    },
      {
        threshold: .5
        // 50% of element must be visible
      });
    for (let elem of elements) {
      // console.log(elem);
      observer.observe(elem);
    }
  }
       return (
      <div className='container-fluid'>
      <div className="section-effect">
          <div className="pb-5 mb-1">
               
	<div class="tokenomic-wrap">
		<div class="container">
                <div className='title-style text-center  pb-4 mb-5'>
                    <div className='text-uppercase text-upper'>The</div>
                    <div className='text-center'>
                    <h2>Tokenomics</h2>
                        {/* <div class="arrow-right"></div>
                        <div className='long-arrow-right'></div> */}
                </div>
                </div>
		      {/* <div class="section-heading">
						<h2 class="title">Tokenomics</h2>
					</div> */}
        <div class="tokenomics">          
        <div class="row">        
				<div class="col-md-6" data-inviewport="scale-in-2">
          <div className="token-wrap">
          <div className='token-title mb-2 mt-4 mt-lg-0'>
            <div>X-Element</div>
            <div></div>
          </div>
          <div className='token-list'>
          <div className='d-flex justify-content-between py-3 border-bottom'>
            <div>Liquidity</div>
            <div>30%</div>
          </div>
          <div className='d-flex justify-content-between py-3 border-bottom'>
            <div>Presale</div>
            <div>32.5%</div>
          </div>
          <div className='d-flex justify-content-between py-3 border-bottom'>
            <div>Private Sale Staking</div>
            <div>10.5%</div>
          </div>
          <div className='d-flex justify-content-between  py-3 border-bottom'>
            <div>Partnership/reserve</div>
            <div>5%</div>
          </div>
          <div className='d-flex justify-content-between  py-3 border-bottom'>
            <div>Team/Advisor</div>
            <div>5%</div>
          </div>
          <div className='d-flex justify-content-between py-3'>
            <div>Burn</div>
            <div>17%</div>
          </div>
          </div>
          </div>
					</div>
          <div class="col-md-6" data-inviewport="slide-right">
            <div className=''></div>
            <img src={tokenomicsImg} className='img-fluid w-75'/>
          </div>
				</div>        
			</div>
		</div>
	</div>
              </div>
          </div>
     </div>
    )
}

export default Tokenomics;