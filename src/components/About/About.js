/** @format */
import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__inner">
        <div className="about__left-side about__left-side">
          <h2 className="title about__left-title">About us</h2>
          <p className="about__text about__left-text">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div className="about__left-side about__right-side">
          <p className="about__text about__right-text">
            {" "}
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
            sit amet.
          </p>
          <button className="about__right-button">show more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
