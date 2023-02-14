/** @format */
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import "./utilis/basic.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <div className="page__inner">
          <About />
          <Services />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default App;
