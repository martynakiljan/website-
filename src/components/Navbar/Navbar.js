/** @format */

import "./navbar.scss";
import "../../assets/styles/basic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import "../Menu/menu.scss";
import React, { useState, useNavigate } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav__inner">
          <div className="nav__logo-burger">
            <a className="nav__logo"  href="#home"> LOGO </a>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="nav__menu">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="nav__meta">
            <div className="nav__meta-item nav__meta-fac-lan">
              <div className="nav__meta-icon nav__meta-icon-facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="nav__meta-icon nav__meta-icon-language">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
