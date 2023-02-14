/** @format */

import "./counter.scss";

const counter = () => {
  return (
    <div className="counter">
      <div className="counter__inner">
        <div className="counter__item counter__first">
          <h4 className="counter__count counter__first-count">12000m2</h4>
          <p className=" counter__text counter__first-text">lorem ipsum</p>
        </div>
        <div className="counter__item counter__second">
          <h4 className="counter__count counter__item counter__first-count">
            34502
          </h4>
          <p className="counter__text counter__first-text">lorem ipsum ip</p>
        </div>
      </div>
    </div>
  );
};

export default counter;
