/** @format */
import "./about.scss";
import React from "react";
import Fade from "react-reveal/Fade";
import Team from "../Team/Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
/** @format */
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="about section" id="about">
      <div className="about__inner">
        <div className="about__left-side about__left-side">
          <h2 className="title about__left-title">
            <FormattedMessage id="about-us-title"></FormattedMessage>
          </h2>
          <p className="about__text about__left-text">
            <FormattedMessage id="about-us-text"></FormattedMessage>
          </p>
        </div>
        <div className="about__right-side about__right-side">
          <div className="about__inner-quote">
            <p className="about__quote-text">
              <FontAwesomeIcon icon={faAnglesLeft} />
              <span className="about__quote-text">
                <FormattedMessage id="quote"></FormattedMessage>

              </span>
              <FontAwesomeIcon icon={faAnglesRight} />
            </p>
          </div>
        </div>
      </div>
      <Team />
      <div className="about__inner--second section">
        <h2 className="title about__left-title">
          {" "}
          <FormattedMessage id="distinctions-title"></FormattedMessage>
        </h2>
        <div className="about-distinction-tiles">
          <div className="about-distinction-tiles__inner">
            <div className="about-distinction-tile about-distinction-tile__first">
              <div className="about-distinction-tile__mask"></div>
              <Fade left>
                <div className="about-distinction-tile__content">
                  <h3 className="about-distinction-tile__title">
                    {" "}
                    <FormattedMessage id="distinctions-text-1"></FormattedMessage>
                  </h3>
                </div>
              </Fade>
            </div>

            <div className="about-distinction-tile about-distinction-tile__second">
              <div className="about-distinction-tile__mask"></div>
              <div className="about-distinction-tile__content">
                <h3 className="about-distinction-tile__title">
                  {" "}
                  <FormattedMessage id="distinctions-text-2"></FormattedMessage>
                </h3>
              </div>
            </div>

            <Fade right>
              <div className="about-distinction-tile about-distinction-tile__third">
                <div className="about-distinction-tile__mask"></div>
                <div className="about-distinction-tile__content">
                  <h3 className="about-distinction-tile__title">
                    {" "}
                    <FormattedMessage id="distinctions-text-3"></FormattedMessage>
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
