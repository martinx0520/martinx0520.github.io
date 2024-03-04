import "./MobileNav.css";

import React from "react";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="/assets/signature.svg" alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button type="button" className="contact-btn" onClick={() => {}}>
              Download Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
