/** @format */

import "./navbar.scss";
import "../../assets/styles/basic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import "../Menu/menu.scss";
import React, { useState, useContext, useEffect } from "react";
import Context from "../../utilis/context";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, selectLanguage } = useContext(Context);
  const [isDeLang, setIsDeLang] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (locale === "de") {
      setIsDeLang(true);
    } else {
      setIsDeLang(false);
    }
  }, [locale]);

  return (
    <Context.Provider>
      <div className="nav">
        <div className="nav__inner">
          <div className="nav__logo-burger">
            <a className="nav__logo" href="#home">
              {" "}
              LOGO{" "}
            </a>
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
              <div className="lang-container" value={locale}>
                {isDeLang ? (
                  <button className="lang" value="en" onClick={selectLanguage}>
                    EN
                  </button>
                ) : (
                  <button className="lang" value="de" onClick={selectLanguage}>
                    DE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Navbar;
