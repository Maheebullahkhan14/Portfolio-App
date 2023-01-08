import React from "react";
import Project1img from "./img1.png";
import Project2img from "./img2.png";
import Project3img from "./img3.png";
import Project4img from "./img4.png";

const Projects = () => {
  return (
    <>
      <div className="Projects">
        <h2>My Projects</h2>

        <div className="Project-Content">
          <div className="Projects-box">
            <div className="Box">
              <img src={Project2img} className='opacity'  alt="project1"></img>
              <a href="https://sneaker-product-cart-maheeb.netlify.app/" target='_blank' title='see live'><i className="eye fa-solid fa-eye" style={{color : 'white'}} ></i></a>
              
              <div className="blur"></div>
            </div>
            <div className="text-content">
              <div className="text">
                <h4>Sneakers</h4>
                <h5>Product Landing Page</h5>
              </div>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>

          <div className="Projects-box">
            <div className="Box">
              <img src={Project3img} className='opacity' alt="project1"></img>
              <a href="https://cara-perfect-store.netlify.app/" target='_blank' title='see live'><i className="eye fa-solid fa-eye" style={{color : 'white'}} ></i></a>
              <div className="blur"></div>
            </div>
            <div className="text-content">
              <div className="text">
                <h4>Cara-A perfect store</h4>
                <h5>E-commerce Page</h5>
              </div>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>

          <div className="Projects-box">
            <div className="Box">
              <img src={Project1img} className='opacity' alt="project1"></img>
              <a href="https://sneaker-product-cart-maheeb.netlify.app/" target='_blank' title='see live'><i className="eye fa-solid fa-eye" style={{color : 'white'}} ></i></a>
              <div className="blur"></div>
            </div>
            <div className="text-content">
              <div className="text">
                <h4>FeelBeats</h4>
                <h5>Music Player</h5>
              </div>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>

          <div className="Projects-box">
            <div className="Box">
              <img src={Project4img} className='opacity' alt="project1"></img>
              
              
              <a href="https://sunny-side-landingpage-maheeb.netlify.app/" target='_blank' title='see live'><i className="eye fa-solid fa-eye" style={{color : 'white'}} ></i></a>
              <div className="blur"></div>
            </div>
            
            <div className="text-content">
              <div className="text">
                <h4>Sunny-Side</h4>
                <h5>Landing Page</h5>
              </div>
              <i className="fa-brands fa-github"></i>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
