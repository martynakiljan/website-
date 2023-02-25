/** @format */
import Navbar from "../Navbar/Navbar";
import "./header.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="header" id="home">
        <div className="header__mask"></div>
        <div className="header__title">
          <h1 className="header__text-first">Construction</h1>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={0}>
            <h2 className="header__text-second">we can. simply</h2>
          </AnimationOnScroll>
        </div>
      </header>
    </>
  );
};

export default Header;
