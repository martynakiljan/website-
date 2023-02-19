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
import "./utilis/basic.scss";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
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
    </>
  );
};

export default App;
