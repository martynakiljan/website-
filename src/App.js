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
import English from "../src/lang/enLang.json";
import Context from "./utilis/context";
import { IntlProvider } from "react-intl";
import Deutsch from "../src/lang/deLang.json";

const App = () => {
  let lang;
  const local = navigator.language;
  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  if (local === "en") {
    lang = English;
  } else {
    if (local === "de") {
      lang = Deutsch;
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "de") {
        setMessages(Deutsch);
      }
    }
  }

  return (
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
                <Counter />
              </div>
            </div>
            <Form />
            <ScrollToTop smooth />
            <Footer />
          </div>
        )}
      </IntlProvider>
    </Context.Provider>
  );
};

export default App;
