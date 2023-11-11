import React from 'react';
import overviewImg from '../../../../assets/images/Overview.png';
import $ from 'jquery';
const About = () => {
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
<div>
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
      <div className="">
        <div className="section-effect">
          {/* <div class="section-wrapper col-12 color ss-style-multitriangles"> */}
          {/* <div className='title-style text-center pb-1 mb-4'>
            <h2 className="text-white">Ecosystem</h2>
        </div> */}
          <div className="row mt-5">
            <div className="col-lg-6 pl-0 pl-lg-3">
              <div className="third-about-img text-center" data-inviewport="slide-left">
                <img src={overviewImg} className="img-fluid" alt="Cinque Terre" height="500" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 pt-lg-0">
              <div className='banner-txt pt-lg-5'>
              <div className='text-uppercase text-upper'>The</div>
                <div className='title-txt mt-3' data-inviewport="slide-up-particle">
                About Us
                </div>
              </div>
              <div className="mb-4 mt-4 pr-lg-5">
                <p style={{ textAlign: "justify" }} data-inviewport="slide-up-particle"> Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings</p>
                <p style={{ textAlign: "justify" }} data-inviewport="slide-up-particle">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo
                  n ullamcorper suscipit loborti excommodo</p>
              </div>
              <div className="pt-3">
                <a href="javascript:;" className="btn btn-outline lp-btn">
                  <span>Know More</span>
                </a>
              </div>
            </div>            
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-xl-3">
              <div data-inviewport="slide-left" className="app-card d-flex flex-column align-items-start justify-content-center px-4">
              <div class="hexagon-shape color-1 mb-3"></div>
                <div className='app-title'>1492</div>
                <div className='app-desc'>laboratories in 100+ states</div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3">
              <div data-inviewport="slide-left" className="app-card d-flex flex-column align-items-start justify-content-center px-4">
              <div class="hexagon-shape color-2 mb-3"></div>
              <div className='app-title'>152</div>
                <div className='app-desc'>Laboratory specialists</div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3">
              <div data-inviewport="slide-right" className="app-card d-flex flex-column align-items-start justify-content-center px-4">
              <div class="hexagon-shape color-3 mb-3"></div>
              <div className='app-title'>1022</div>
                <div className='app-desc'>Material collection points</div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3">
              <div data-inviewport="slide-right" className="app-card d-flex flex-column align-items-start justify-content-center px-4">
              <div class="hexagon-shape color-4 mb-3"></div>
              <div className='app-title'>24332</div>
                <div className='app-desc'>Patients diagnosed in 2022</div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default About;
