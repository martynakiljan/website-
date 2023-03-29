/** @format */
import "./about.scss";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Team from "../Team/Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const text =
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit";

  return (
    <div className="about section" id="about">
      <div className="about__inner">
        <div className="about__left-side about__left-side">
          <h2 className="title about__left-title">About us</h2>
          <p className="about__text about__left-text">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. kasd gubergrebergren, no sea bergren, no sea bergren, no sea
            bergren, no sea n, no sea takimata sanctus est Lorem ipsum dolor
          </p>
        </div>
        <div className="about__left-side about__right-side">
          <p className="about__text about__right-text">
            {showMore ? text : `${text.substring(0, 50)}`}
          </p>
          <button
            className="about__right-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
          <div className="about__inner-quote">
            <p className="about__quote-text">
          <FontAwesomeIcon icon={faAnglesRight} />
              <span className="about__quote-text">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </span>
        <FontAwesomeIcon icon={faAnglesLeft} />
            </p>
          </div>
        </div>
      </div>
      <Team />
      <div className="about__inner--second section">
        <h2 className="title about__left-title">What makes us stand out ?</h2>
        <div className="about-distinction-tiles">
          <div className="about-distinction-tiles__inner">
            <div className="about-distinction-tile about-distinction-tile__first">
              <div className="about-distinction-tile__mask"></div>
              <Fade left>
                <div className="about-distinction-tile__content">
                  <h3 className="about-distinction-tile__title">Lorem ipsum</h3>
                  <p className="about-distinction-tile__text">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est{" "}
                  </p>
                </div>
              </Fade>
            </div>

            <div className="about-distinction-tile about-distinction-tile__second">
              <div className="about-distinction-tile__mask"></div>
              <div className="about-distinction-tile__content">
                <h3 className="about-distinction-tile__title">Lorem ipsum</h3>
                <p className="about-distinction-tile__text">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est
                </p>
              </div>
            </div>

            <Fade right>
              <div className="about-distinction-tile about-distinction-tile__third">
                <div className="about-distinction-tile__mask"></div>
                <div className="about-distinction-tile__content">
                  <h3 className="about-distinction-tile__title">Lorem ipsum</h3>
                  <p className="about-distinction-tile__text">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est{" "}
                  </p>
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
