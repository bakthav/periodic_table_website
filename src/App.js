import React , { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import './App.scss';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



import Logo from './assets/images/logo.png';
import comingsoon from './assets/images/coming-soon.jpg';

const LandingPage = React.lazy(() => import('./route/LandingPage/components/index'));
const LunchApp = React.lazy(() => import('./route/LaunchApp/components/index'));




const App = () => { 

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
<div>
{/* <Suspense fallback={<div>Loading...</div>}>
        <section>
       <LunchApp/>
          <LandingPage />
        </section>
      </Suspense> */}

      {/* <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LunchApp" element={<LunchApp />} />
      </Routes>
    </Suspense>
  </Router> */}

  {/* <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
     <div className="App">
     <Route path="/LunchApp" element={<LunchApp />} />
      <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>

    </div>
    </Suspense>
    </BrowserRouter> */}

    <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/launchapp" component={LunchApp} />
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <LandingPage/>
                  )}
                />
              </Switch>
            </Suspense>
      </BrowserRouter>


   
        {/* Animation start here */}
          
  
    
   

    <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body p-0 position-relative">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div className="coming-soon">   
                <img src={comingsoon} className="img-fluid"/>
            </div>
      </div>
    </div>
  </div>
</div>
  </div>
  );
}

export default App;
