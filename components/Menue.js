import React, { useState, useEffect } from 'react'
import Image from 'next/image'


const Menue = () => {
const [scrolling, setScrolling] = useState(null);
  const [scrollTop, setScrollTop] = useState(80);
    const [brandColor, setBrandColor] = useState(null);
    
    const color = brandColor;

 const divStyle = {
         color: color,
         
  };    

    useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > 80) {
        // downscroll code
          setScrolling('c-bg');
          setBrandColor('#ff3333');
      } else {
        // upscroll code
          setScrolling('');
          setBrandColor('');
      }     
        };

     const ChangeBrandColor = () => {
         divStyle = {
         color: {brandColor},
         
  }; 
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
     
   
    
    return (
        <>
          <nav className={`navbar navbar-expand-lg navbar-dark fixed-top  ${scrolling}`} >
            <div className="container">
              <a className="navbar-brand" href="#page-top" style={divStyle}>
                Web.Metropolis
              </a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>    
                <div className={`collapse navbar-collapse justify-content-end`} id="navbarResponsive" >
                  <ul className="navbar-nav">                      
                      <li className="nav-item">
                        <a className="nav-link " href="#about" style={divStyle}>
                          About us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#mietpark" style={divStyle}>
                          Projekte
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact" style={divStyle}>
                          Kontakt
                        </a>
                      </li>
                    </ul>
                  </div>      
              </div>
          </nav>
        </>
    )
}

export default Menue