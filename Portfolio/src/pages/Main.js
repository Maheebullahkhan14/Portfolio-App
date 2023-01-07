import React from "react";
import myavtar from './Avtar.png'

const Main = () => {
  return (
    <>
      <div className="Main">
        <div>
          <div className="TopContent">
            <img src={myavtar}></img>
            <div className="myName">
              <h3>Maheeb Khan</h3>
              <h5>Frontend Developer</h5>
            </div>
          </div>
          <div className="line-1"></div>
          <div className="Show_contacts">Show Contacts</div>
          <div className="wrapp">
            <div className="BottomContent">
              <div className="contactDetails">
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>

                <div className="data">
                  <h5>EMAIL</h5>
                  <p>MaheebullahKhan2000@gmail.com</p>
                </div>
              </div>
              <div className="contactDetails">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>

                <div className="data">
                  <h5>PHONE</h5>
                  <p>+91 8080031998</p>
                </div>
              </div>
              <div className="contactDetails">
                <span className="location">
                  <i className="fa-solid fa-location-dot"></i>
                </span>

                <div className="data">
                  <h5>LOCATION</h5>
                  <p>
                    Mumbai, <br></br> Maharashtra , India
                  </p>
                </div>
              </div>
            </div>
            <div className="line-1"></div>
            <div className="SocialNetwork">
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://github.com/Maheebullahkhan14"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/khan-maheebullah-nisar-ahmed-8b54641b1/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/KhanMahebullah" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
