import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="section footer-section">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://linkedin.com/in/yousef-ghanim" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yousef-ghanim" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto: yousefghanim85@gmail.com" target="_blank">
            <FaEnvelope />
          </a>
        </div>
        <h4 className="footer-text">designed and built by Yousef Ghanim</h4>
      </div>
    </section>
  );
};

export default Footer;
