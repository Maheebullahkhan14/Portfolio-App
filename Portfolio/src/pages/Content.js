import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

const Content = () => {
  const [Nav, setNav] = useState("About");

  
  const changeNav = (e) => {
  const Activelinks = document.querySelectorAll('.links')
  Activelinks.forEach((links) =>{
   
      links.classList.remove('Active')
    
   })
    
    setNav("");
    if (e.target.innerHTML === "About") {
      setNav("About");
      e.target.classList.add('Active')
     
    } else if (e.target.innerHTML === "Resume") {
      setNav("Resume");
      e.target.classList.add('Active')
     
      
      
    } else if (e.target.innerHTML === "Projects") {
      setNav("Projects");
      e.target.classList.add('Active')
     
    } else if (e.target.innerHTML === "Contact") {
      setNav("Contact");
      e.target.classList.add('Active')
      
    } else {
      setNav("");
      
      
    }
  };
  function SelectContent() {
    if (Nav === "About") {
      return <About />;
    } else if (Nav === "Resume") {
      return <Resume />;
    } else if (Nav === "Projects") {
      return <Projects />;
    } else if (Nav === "Contact") {
      return <Contact />;
    }
  }

  return (
    <>
      <div className="All-content">
        <div className="Nav">
          <ul>
            <li className= 'links Active' onClick={changeNav}>
              About
            </li>
            <li className= 'links' onClick={changeNav}>
              Resume
            </li>
            <li className= 'links' onClick={changeNav}>
              Projects
            </li>
            <li className= 'links' onClick={changeNav}>
              Contact
            </li>
          </ul>
        </div>
        {SelectContent()}
      </div>
    </>
  );
};

export default Content;
