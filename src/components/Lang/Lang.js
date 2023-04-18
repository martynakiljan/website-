/** @format */
import "./lang.scss"
import React from "react";

const Lang = ({ locale, isDeLang, selectLanguage }) => {
  return (
    <l className="menu__item" value={locale}>
      {isDeLang ? (
        <button className="lang" value="en" onClick={selectLanguage}>
          EN
        </button>
      ) : (
        <button className="lang" value="de-DE" onClick={selectLanguage}>
          DE
        </button>
      )}
    </l>
  );
};

export default Lang;
