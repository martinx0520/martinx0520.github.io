import "./Navbar.css";

import React, { useState } from "react";

import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="/assets/signature.svg" alt="" />
          <ul>
            <li>
              <a className="menu-item" href="#Home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#WorkExperience">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#ContactMe">
                Contact Me
              </a>
            </li>

            <a href="/assets/Martin_Resume_F23_V3.pdf" className="contact-btn">
              Download Resume
            </a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
