/** @format */
import "./about.scss";
import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const text =
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit";

  return (
    <div className="about" id="about">
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
        </div>
      </div>
    </div>
  );
};

export default About;
