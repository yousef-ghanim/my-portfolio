import React from "react";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container">
        <div className="title-container contact-title-container">
          <div className="line contact-title-line"></div>
          <h1 className="contact-title title">
            <span>4.</span> Contact me
          </h1>
        </div>

        <p className="contact-text">
          My inbox is always open, whether you want to discuss a job
          opportunity, or you have a question, or you just want to say hi.
        </p>
        <a href="mailto: yousefghanim85@gmail.com" className="btn contact-btn">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default Contact;
