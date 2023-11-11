import React from 'react';
import $ from 'jquery'; 
const Contactus = () => {
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
  return(
  
    <div className="container-fluid">
         <div className='text-center pb-1 mb-5'>
          <div className='title-style pb-1'><h2>Contact Us </h2></div>
            <ul className='pt-2'>
                <li><span>Email :</span> admin@info.com</li>
                {/* <li><span>Phone :</span> + 97 325 6254 324</li> */}
            </ul>
    </div>
         <div class="contact-area" data-inviewport="scale-in-2">
                <div id="contactus" class="container custom-container pb-5">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6">
                            <form action="#" class="third-contact-form">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Your Phone"/>
                                    </div>
                                </div>
                                <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
                                <div className="pt-4 text-center">
                                    <a href="javascript:;" className="btn btn-outline lp-btn">
                                        <span>submit </span>
                                    </a>
                                </div> 
                                {/* <button class="btn rotated-btn">submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contactus;
