/** @format */
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {" "}
        <FontAwesomeIcon icon={faCopyright} className="footer-copyright" />
        <p>2022, </p>
        <span className="footer-company-name"> Mat Bau</span>
      </div>
    </footer>
  );
};

export default Footer;
