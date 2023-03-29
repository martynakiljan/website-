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
          <h1 className="header__text-first">
            <FormattedMessage
              id="app.header"
              defaultMessage="Learn React"
            ></FormattedMessage>
          </h1>

          <h2 className="header__text-second">IHR BAU PARTNER</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
