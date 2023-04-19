/** @format */
import "./services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHammer,
  faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div className="services section" id="service">
      <h3 className="title services__items-title">
        <FormattedMessage id="service-title"></FormattedMessage>
      </h3>
      <div className="services__items-icons">
        <div className="services__items-icons__inner">
          <div className="services__service">
            <FontAwesomeIcon icon={faBuilding} />
            <div className="services__inner-text">
              <p className="services-title">
                <FormattedMessage id="service-title-1"></FormattedMessage>
              </p>
            </div>
            <ul>
              <li>
                {" "}
                <FormattedMessage id="service-1-1"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-2"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-3"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-4"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-5"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-6"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-7"></FormattedMessage>
              </li>
              <li>
                {" "}
                <FormattedMessage id="service-1-8"></FormattedMessage>
              </li>
            </ul>
          </div>
          <div className="services__service">
            <FontAwesomeIcon icon={faPaintRoller} />
            <div className="services__inner-text">
              <p className="services-title">
                <FormattedMessage id="service-title-2"></FormattedMessage>
              </p>
              <ul>
                <li>
                  {" "}
                  <FormattedMessage id="service-2-1"></FormattedMessage>
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="service-2-2"></FormattedMessage>
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="service-2-3"></FormattedMessage>
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="service-2-4"></FormattedMessage>
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="service-2-5"></FormattedMessage>
                </li>
              </ul>
            </div>
          </div>
          <div className="services__service">
            <FontAwesomeIcon icon={faHammer} />
            <div className="services__inner-text">
              <p className="services-title">
                <FormattedMessage id="service-title-3"></FormattedMessage>
              </p>
              <ul>
                <li>
                  {" "}
                  <FormattedMessage id="service-3-1"></FormattedMessage>
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="service-3-2"></FormattedMessage>
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="service-3-3"></FormattedMessage>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
