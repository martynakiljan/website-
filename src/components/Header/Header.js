/** @format */
import Navbar from "../Navbar/Navbar";
import "./header.scss";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="header" id="home">
        <div className="header__mask"></div>
        <div className="header__title">
          <h1 className="header__text-first" id="app.header">
            Construction
          </h1>
          <h2 className="header__text-second">we can. simply</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
