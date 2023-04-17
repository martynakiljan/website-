/** @format */

import React from "react";

const Lang = ({ locale, isDeLang, selectLanguage }) => {
  return (
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
  );
};

export default Lang;
