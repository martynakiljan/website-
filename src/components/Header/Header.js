/** @format */
import Navbar from "../Navbar/Navbar";
import "./header.scss";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="header" id="home">
        <div className="header__mask"></div>
        <div className="header__title">
          <FormattedMessage
            id="app.header"
            defaultMessage="Learn React"
            className="header__text-first"
          >
    
          </FormattedMessage>
          <h2 className="header__text-second">we can. simply</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
