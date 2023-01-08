import React from "react";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <h2>Contact</h2>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30166.217028858155!2d72.86423625255823!3d19.073534183425263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88dc3293d95%3A0xe23a6cfa88849bed!2sKurla%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1672739314261!5m2!1sen!2sin"
            width="800"
            height="350"
            loading="lazy"
          ></iframe>
        </section>

        <div className="cont2">
          <h3>Contact Form</h3>

          <div className="cont-input">
          
            <input type="text" placeholder="Full name"></input>
            <input type="text" placeholder="Email Address"></input>
          </div>
          <textarea cols="" rows="6" placeholder="Your Message"></textarea>
          <div className="span">
            <span>Send Message</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
