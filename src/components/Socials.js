import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInfoCircle } from "react-icons/fa";

const Socials = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="socials-container">
      <li className={`socials-list ${show && "socials-list-active"}`}>
        <ul className="socials-item">
          <a
            className="socials-link"
            href="https://linkedin.com/in/yousef-ghanim"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </ul>
        <ul className="socials-item">
          <a
            className="socials-link"
            href="https://github.com/yousef-ghanim"
            target="_blank"
          >
            <FaGithub />
          </a>
        </ul>
        <ul className="socials-item">
          <a
            className="socials-link"
            href="mailto: yousefghanim85@gmail.com"
            target="_blank"
          >
            <FaEnvelope />
          </a>
        </ul>
      </li>
      <button className="socials-btn" onClick={() => setShow(!show)}>
        <FaInfoCircle />
      </button>
    </div>
  );
};

export default Socials;
