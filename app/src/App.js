/** @format */
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./utilis/basic.scss";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
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
  );
};

export default App;
