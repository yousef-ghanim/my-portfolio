import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInfoCircle } from "react-icons/fa";

const Socials = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="socials-container">
      <ul className={`socials-list ${show && "socials-list-active"}`}>
        <li className="socials-item">
          <a
            className="socials-link"
            aria-label="Linkedin"
            href="https://linkedin.com/in/yousef-ghanim"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="socials-item">
          <a
            className="socials-link"
            aria-label="Github"
            href="https://github.com/yousef-ghanim"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
        <li className="socials-item">
          <a
            className="socials-link"
            aria-label="Email"
            href="mailto: yousefghanim85@gmail.com"
            target="_blank"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <button
        aria-label="social_btn"
        className="socials-btn"
        onClick={() => setShow(!show)}
      >
        <FaInfoCircle />
      </button>
    </div>
  );
};

export default Socials;
