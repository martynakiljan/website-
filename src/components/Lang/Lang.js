/** @format */
import "./lang.scss";
import React from "react";

const Lang = ({ locale, isDeLang, selectLanguage }) => {
  return (
    <li className="menu__item-lang" value={locale}>
      {isDeLang ? (
        <button className="lang" value="en" onClick={selectLanguage}>
          EN
        </button>
      ) : (
        <button className="lang" value="de-DE" onClick={selectLanguage}>
          DE
        </button>
      )}
    </li>
  );
};

export default Lang;
