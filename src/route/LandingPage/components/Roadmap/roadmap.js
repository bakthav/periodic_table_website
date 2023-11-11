import React from 'react';
import $ from 'jquery';
// import marbleBg from '../../../assets/images/roadmap-bg.jpg';
import icons1 from '../../../../assets/images/r-1.jpg';
import icons2 from '../../../../assets/images/r-2.jpg';
import icons3 from '../../../../assets/images/r-3.jpg';
import icons4 from '../../../../assets/images/r-4.jpg';

const Roadmap = () => {
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
      <div className='roadmap-wrapper'>
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
        <div className="container">
            <div class="timeline">
                
                <div className='title-style text-center  pb-4 mb-5'>
                    <div className='text-uppercase text-upper'>The</div>
                    <div className='text-center'>
                    <h2>ROADMAP</h2>
                        {/* <div class="arrow-right"></div>
                        <div className='long-arrow-right'></div> */}
                </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 mb-3 mb-lg-0'>
                        <div className='pr-lg-5' >
                            <div className='img-circle bg-color-1 mb-4'>
                              <img src={icons1} className="roadmap-img img-fluid"></img>
                              </div>
                            <div className='roadmap-title mb-4'>PHASE 1 <br/>( Q3 2022 )</div>
                            <ul className='road-map-list' data-inviewport="slide-up-particle">
                                <li>Planning</li>
                                <li>Team Assembly</li>
                                <li>Resource Gathering</li>
                                <li>Ecosystem Concept Design</li>
                                <li>Track Building</li>
                                <li>Website Design</li>
                                <li>Documentation</li>
                                <li>DAPP POC</li>
                                <li>Test Contracts</li>
                                <li>Satoshi Track Build</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 mb-3 mb-lg-0'>
                    <div className='pr-lg-5'>
                              <div className='img-circle bg-color-2 mb-4'>
                               <img src={icons2} className="roadmap-img img-fluid"></img>
                              </div>
                            <div className='roadmap-title mb-4'>PHASE 2 <br/> ( Q4 2022 )</div>
                            <ul className='road-map-list' data-inviewport="slide-up-particle">
                               <li>Track Automation</li>
                                <li>Vitalik Track Build</li>
                                <li>Launch partnerships</li>
                                <li>Launch & Listing </li>
                                <li>UI/UX Design</li>
                                <li>DAPP Development & Release</li>
                                <li>V1 Live Race Studio Build</li>
                                <li>V1 Live Race Blockchain Integration</li>
                                <li>V1 Live Race Participation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 mb-3 mb-lg-0'>
                    <div className='pr-lg-5'>
                            <div className='img-circle bg-color-3 mb-4'>
                               <img src={icons3} className="roadmap-img img-fluid"></img>
                              </div>
                            <div className='roadmap-title mb-4'>PHASE 3 <br/> ( Q1 2023 )</div>
                            <ul className='road-map-list' data-inviewport="slide-up-particle">
                                <li>CZ Track Concept & Build</li>
                                <li>V2 Meta-Gaming App Build</li>
                                <li>DAO Assembly</li>
                                <li>Further Exchange Listings</li>
                                <li>Revenue Sharing Programs</li>
                                <li>Ambassador Programs</li>
                                <li>Documentation</li>
                                <li>V1 LIVE Track League Races</li>
                                <li>V1 LIVE Track 2023 Season 1 Tournaments</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 mb-3 mb-lg-0'>
                    <div className='pr-lg-5'>
                    <div className='img-circle bg-color-4 mb-4'>
                               <img src={icons4} className="roadmap-img img-fluid"></img>
                              </div>
                            <div className='roadmap-title mb-4'>PHASE 4  <br/> ( Q2 2023 )</div>
                            <ul className='road-map-list' data-inviewport="slide-up-particle">
                                <li>Further CEX Exchange Listings</li>
                                <li>Further Marketing</li>
                                <li>V1 LIVE Races on Satoshi, Vitalik & CZ Race  track games on them to expand further footprint and partnerships.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Roadmap;
