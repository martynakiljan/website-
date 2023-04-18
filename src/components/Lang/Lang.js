/** @format */

import React from "react";

const Lang = ({ locale, isDeLang, selectLanguage }) => {
  return (
    <li className="menu__item" value={locale}>
      {isDeLang ? (
        <button className="lang" value="en" onClick={selectLanguage}>
          EN
        </button>
      ) : (
        <button className="lang" value="de" onClick={selectLanguage}>
          DE
        </button>
      )}
    </li>
  );
};

export default Lang;
