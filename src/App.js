/** @format */

import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import BeatLoader from "react-spinners/BeatLoader";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./assets/styles/basic.scss";
import ScrollToTop from "react-scroll-to-top";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import Context from "./utilis/context";
import { IntlProvider } from "react-intl";
import Deutsch from "../src/lang/deLang.json";
import English from "../src/lang/enLang.json";
const local = navigator.language;

let lang;
if (local === "de-DE") {
  lang = Deutsch;
} else {
  lang = English;
}

const App = () => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);

    if (newLocale === "de") {
      setMessages(Deutsch);
    } else {
      setMessages(English);
    }
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <React.StrictMode>
      <Context.Provider value={{ locale, selectLanguage }}>
        <IntlProvider messages={messages} locale={locale}>
          {loading ? (
            <div className="beatloader">
              <BeatLoader color={"#f6ce4a"} loading={loading} size={10} />
            </div>
          ) : (
            <div>
              <Header />
              <div className="page">
                <div className="page__inner">
                  <About />
                  <Services />
                  <Slider />
                </div>
              </div>
              <Form />
              <ScrollToTop smooth />
              <Footer />
            </div>
          )}
        </IntlProvider>
      </Context.Provider>
    </React.StrictMode>
  );
};

export default App;
