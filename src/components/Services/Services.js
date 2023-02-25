/** @format */
import "./services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services" id="service">
      <div className="services-tiles">
        <div className="services-tiles__inner">
          <div className="services-tile services-tile__first">
            <div className="services-tile__mask"></div>
            <div className="services-tile__content">
              <h3 className="services-tile__title">Lorem ipsum</h3>
              <p className="services-tile__text">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est{" "}
              </p>
            </div>
          </div>
          <div className="services-tile services-tile__second">
            <div className="services-tile__mask"></div>
            <div className="services-tile__content">
              <h3 className="services-tile__title">Lorem ipsum</h3>
              <p className="services-tile__text">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est{" "}
              </p>
            </div>
          </div>
          <div className="services-tile services-tile__third">
            <div className="services-tile__mask"></div>
            <div className="services-tile__content">
              <h3 className="services-tile__title">Lorem ipsum</h3>
              <p className="services-tile__text">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services__items-icons">
        <h3 className="title services__items-title">Our Services</h3>
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
