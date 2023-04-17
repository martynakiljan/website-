/** @format */
import "./menu.scss";
import { FormattedMessage } from "react-intl";
import React from "react";
import Context from "../../utilis/context";
import Lang from "../Lang/Lang";

const Menu = ({ isOpen, locale, isDeLang, selectLanguage }) => {
  return (
    <Context.Provider>
      <div className={`menu ${isOpen ? "menu-is-open" : ""}`}>
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
    </Context.Provider>
  );
};

export default Menu;
