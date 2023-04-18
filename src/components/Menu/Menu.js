/** @format */
import "./menu.scss";
import { FormattedMessage } from "react-intl";
import Context from "../../utilis/context";
import Lang from "../Lang/Lang";
import React, { useEffect, useRef } from "react";

const Menu = ({ isOpen, locale, isDeLang, selectLanguage, setIsOpen }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (!isOpen && ref.current && !ref.current.contains(e.target)) {
        console.log("zamknij");
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [setIsOpen]);

  return (
    <Context.Provider>
      <div className="menu-mobile" ref={ref}>
        {isOpen && (
          <div
            className={`menu ${
              isOpen ? "menu-is-open isOutideClidkedOnMobile" : ""
            }`}
          >
            <div className="menu__inner">
              <ul className="menu__list">
                <li className="menu__item">
                  <a className="menu__link" href="#home">
                    <FormattedMessage id="menu-item-1"></FormattedMessage>
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#about">
                    <FormattedMessage id="menu-item-2"></FormattedMessage>
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#service">
                    <FormattedMessage id="menu-item-3"></FormattedMessage>
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#contact">
                    <FormattedMessage id="menu-item-4"></FormattedMessage>
                  </a>
                </li>
                <Lang
                  isDeLang={isDeLang}
                  selectLanguage={selectLanguage}
                  locale={locale}
                />
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="menu-desktop">
        <div
          className={`menu ${
            isOpen ? "menu-is-open isOutideClidkedOnMobile" : ""
          }`}
        >
          <div className="menu__inner">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#home">
                  <FormattedMessage id="menu-item-1"></FormattedMessage>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#about">
                  <FormattedMessage id="menu-item-2"></FormattedMessage>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#service">
                  <FormattedMessage id="menu-item-3"></FormattedMessage>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#contact">
                  <FormattedMessage id="menu-item-4"></FormattedMessage>
                </a>
              </li>
              <Lang
                isDeLang={isDeLang}
                selectLanguage={selectLanguage}
                locale={locale}
              />
            </ul>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Menu;
