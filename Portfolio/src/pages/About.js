import React from "react";
import logo from './logo512.png'
import Htmllogo from './logo-5-color.png'
import CssLogo from './logo-6-color.png'
import GitLogo from './logo-7-color.png'
const About = () => {
  return (
    <>
      <div className="About-main-content">
        <section className="About">
          <h1>About Me</h1>
          <p>
            I'm Frontend developer from Mumbai, India. I like to code things
            from scratch and enjoy turning complex problems into simple,
            beautiful and intuitive interfaces.
          </p>
          <p>
            Seeking an opportunity to make the best use of my knowledge and
            utilzing it for adding value to the organization and fullfilling my
            own personal and professional growth.
          </p>
        </section>
        <section className="Work">
          <h2>What i am Doing</h2>
          <div className="WorkContent">
            <div className="Left-content">
              <img src="https://amansingh.vercel.app/assets/images/icon-design.svg"></img>
              <div className="WorkDetails">
                <h3>Responsive Web Design</h3>
                <p>The Most modern and high-quality design mode at a professional level</p>
              </div>
            </div>
            <div className="Right-Content">
            <img src="https://amansingh.vercel.app/assets/images/icon-dev.svg"></img>
              <div className="WorkDetails">
                <h3>Web Development</h3>
                <p>High-quality development of sites at the professional level.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Skills">
          <h3>Skills</h3>
          <div className="Skills-container">
            <ul>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className='grayscale'></img></li>
              <li><img src={logo } className='grayscale'></img></li>
              <li><img src={Htmllogo} className='grayscale'></img></li>
              <li><img src={CssLogo} className='grayscale'></img></li>
              <li><img src={GitLogo} className='grayscale'></img></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
