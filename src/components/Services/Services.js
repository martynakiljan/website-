/** @format */
import "./services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
  return (
    <div className="services section" id="service">
      <h3 className="title services__items-title">Our Services</h3>
      <div className="services__items-icons">
        <div className="services__items-icons__inner">
          <div className="services__service">
            <FontAwesomeIcon icon={faPaintRoller} />
            <p className="services__paragraph">
              vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
          <div className="services__service">
            <FontAwesomeIcon icon={faPaintRoller} />
            <p className="services__paragraph">
              vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
          <div className="services__service">
            <FontAwesomeIcon icon={faPaintRoller} />
            <p className="services__paragraph">
              vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
