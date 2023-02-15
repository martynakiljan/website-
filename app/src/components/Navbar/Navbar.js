/** @format */

import React from "react";
import "./navbar.scss";
import "../../utilis/basic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import "../Menu/menu.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__inner">
          <div className="nav__logo"> LOGO </div>
          <div className="nav__meta">
            <div className="nav__meta-item">
              <div className="nav__meta-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="nav__meta-text">
                <p className="nav__meta-text nav__meta-phone">+41779953234</p>
                <p className="nav__meta-text nav__meta-email">company@wp.pl</p>
              </div>
            </div>
            <div className="nav__meta-item">
              <div className="nav__meta-icon">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <div className="nav__meta-text">
                <p className="nav__meta-text nav__meta-address">
                  Zürcherstrasse 23
                </p>
                <p className="nav__meta-text nav__meta-address-street">
                  45-345 Zürich
                </p>
              </div>
            </div>
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
        <Burger className="burger"></Burger>
        <div className="menu">
          <div className="menu__inner">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
