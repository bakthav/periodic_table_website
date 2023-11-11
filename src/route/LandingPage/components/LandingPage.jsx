import React , { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/logo-img.svg';
import Banner from './Banner/index';
import Roadmap from './Roadmap/roadmap'
import About from './About/about';
import Teams from './Teams/teams';
import Tokenomics from './Tokenomics/tokenomics';
// import Overview from './components/Pages/Overview/overview';
import Contactus from './Contactus/contactus';
const LandingPage = (props) => {
  
  const [scrollingLock, setScrollingLock] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollingLock(true);
    } else if (window.scrollY < 0) {
      setScrollingLock(false);
    }
  }
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 

      // var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      //   target: '.navbar-nav',
      //   offset: 200
      // })

    });
  }); 
  (function() {
  
    function initOnLoad() {
      console.log('Dom loaded');
    };
    
    window.addEventListener('load', initOnLoad);
  })();

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
    <div className="h-100" id="headertop">
         <div>
         <nav className="navbar navbar-expand-lg navbar-inverse navbar-fixed-top w-100 justify-content-center" id="navbar_top" style={{position: scrollingLock ? "fixed" : "fixed"}}>
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
             <img src={Logo} className="logo img-fluid"/>
            </a> */}

           <a className="navbar-brand" href="#">
           <img src={Logo} className="logo img-fluid"/>  <span className='logo-txt'>X-Elements</span>  
            </a>
            <div className="navbar-header">
                {/* <a className="navbar-brand d-lg-none" href="#"> </a>      */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
              <span class="close"></span>
                </button>
            </div>
          <div className="collapse navbar-collapse" id="navbarToggle">
          {/* <a className="navbar-brand d-none d-lg-block" href="#">
            <img src={Logo} style={{width:'100%', height:'100%'}}/></a> */}
  
            <ul className="navbar-nav">
            <li class="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">ROADMAP</a>
              </li>         
              <li className="nav-item">
                <a className="nav-link"  href="#tokenomics">Tokenomics</a>
              </li>    
              <li className="nav-item">
               <a className="nav-link" href="#contact">CONTACT Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
          
              <li className="nav-item">
              {/* <Link to="/launchapp"> */}
              <a href="https://periodic-table-eth.web.app/" className="btn lp-btn lp-btn-sm primary-btn">
                  Wallet connect
                </a>
                {/* </Link> */}
              </li>
              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link active" href="#home">Tiers <span class="sr-only">(current)</span></a>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link" href="#contact">CONTACT Us</a>*/}
              {/*</li>*/}
            </ul>
          </div>
          </div>
        </nav>  
        </div>
        <div class="container-fluid px-0">
      
      {/* Animation end here */}
      <section id="home" className="position-relative p-0 m-0">
      <Banner></Banner>
      </section>
      <section id="about" className="position-relative">
      <div class='bg-image'>
           <div className='inner-section remove-border'>
            <About></About>
            </div>
            </div>
        </section> 
        <section id="roadmap" className="position-relative">
          <div class='bg-image2'>
        <div className='inner-section'>  
            <Roadmap></Roadmap>
            </div>
            </div>   
        </section>
        {/* <section id="whitepaper" className="position-relative">
          <div class='bg-image2'>
          <div className='inner-section'>
               <Overview></Overview> 
            </div>
            </div>
          </section> 
         */}
        <section id="tokenomics" className="position-relative">
        <div class='bg-image'>
        <div className='inner-section'>
            <Tokenomics></Tokenomics>
          </div>
          </div>
        </section>  
        {/* <section id="devplan" className="position-relative">
        <div class='bg-image2'>
        <div className='inner-section'>
            <Teams></Teams>
          </div>
          </div>
        </section>  */}
        <section id="contact" className="position-relative">
        <div class='bg-image2'>
            <div className='inner-section'>
            <Contactus></Contactus> 
            </div>
            </div>
        </section>
      </div>
  
  
      <footer className='position-relative'>
      <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
          <div class="copyright-wrap third-copyright-wrap py-3">
              <div class="container custom-container">
                  <div class="row">
                      <div class="col-lg-6 col-md-6">
                          <div class="copyright-text">
                              <p className='p-0 m-0'>Copyright © 2023 <a href='#'> X-Elements</a> All Rights Reserved.</p>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6 align-content-lg-end d-flex justify-content-end">
                          <a href="javascript:;" target="_blank"><i className="fa fa-twitter fa-2x mr-3"/></a>
                          <a href="javascript:;"  target="_blank"><i className="fa fa-telegram fa-2x mr-3"/></a>
                          <a href="javascript:;"  target="_blank"><i className="fa fa-youtube-play fa-2x"/></a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>  
    </div>
  );
};

export default LandingPage;
