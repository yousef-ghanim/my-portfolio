import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo/logo.svg";
import Socials from "./Socials";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const fixNav = () => {
    const screenPos = window.pageYOffset;
    if (screenPos > 84) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  window.addEventListener("scroll", fixNav);
  return (
    <header className="section header" id="home">
      <Socials />
      <nav className={`nav ${navActive ? "nav-active" : null}`}>
        <a className="logo-container" href="#home">
          <svg
            className="logo"
            width="916"
            height="913"
            viewBox="0 0 916 913"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="logo-path-1"
              d="M764.73 584.109L891.127 456.847L764.73 330.45V151.244H585.524L458.261 23.9812L331.864 150.378H152.658V329.584L25.3955 456.847L151.792 584.109V763.316H330.998L458.261 889.712L584.658 763.316H763.864L764.73 584.109Z"
              stroke="black"
              strokeWidth="25.9719"
            />
            <path
              className="logo-path-2"
              d="M501.122 478.339V680.613H418.781V488.482L269.014 246.827H362.096L501.122 478.339ZM553.63 246.827H645.519L519.023 455.665C515.045 450.494 510.769 443.831 506.194 435.676C501.62 427.521 497.841 418.571 494.857 408.825C491.874 399.08 490.283 388.936 490.084 378.395C489.885 367.853 492.371 357.81 497.542 348.263L553.63 246.827Z"
              stroke="black"
              strokeWidth="17.048"
            />
          </svg>
        </a>

        <ul className={`nav-menu ${show && "nav-menu-active"}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setShow(false)}>
              <span>1.</span> Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setShow(false)}
            >
              <span>2.</span> About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className="nav-link"
              onClick={() => setShow(false)}
            >
              <span>3.</span> Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setShow(false)}
            >
              <span>4.</span> Contact
            </a>
          </li>
        </ul>
        <button className="menu-btn" onClick={() => setShow(!show)}>
          <FaBars />
        </button>
      </nav>

      <div className="banner">
        <h3 className="banner-title">Yousef Ghanim</h3>
        <h1 className="banner-subtitle">Front End Developer</h1>

        <p className="banner-text">
          I enjoy building functioning elegant websites that meet your business
          needs.
        </p>
        <a href="mailto: yousefghanim85@gmail.com" className="btn">
          Get In Touch
        </a>
      </div>
    </header>
  );
};

export default Navbar;
