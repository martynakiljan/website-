/** @format */
import CountUp from "react-countup";
import "./counter.scss";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { InView } from "react-intersection-observer";

// https://codesandbox.io/s/inview-render-props-hvhcb?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx:483-492

const Counter = () => {
  const [inView, setInView] = useState(false);

  return (
    <div className="counter" inView={inView}>
      <InView onChange={setInView}>
        {({ ref }) => (
          <div className="counter__inner" ref={ref}>
            {inView ? (
              <>
                <CountUp
                  start={0}
                  end={16343}
                  duration={3}
                  separator=" "
                  decimals={0}
                  decimal=","
                  prefix=""
                  suffix="m²"
                  onEnd={() => console.log("Ended! 👏")}
                  onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef, start }) => (
                    <div className="counter__item counter__first">
                      <h4
                        className="counter__count counter__first-count"
                        ref={countUpRef}
                      ></h4>
                      <p className=" counter__text counter__first-text">
                        lorem ipsum
                      </p>
                    </div>
                  )}
                </CountUp>
                <CountUp
                  start={0}
                  end={12092}
                  duration={3}
                  separator=" "
                  decimals={0}
                  decimal=","
                  prefix=""
                  suffix=""
                  onEnd={() => console.log("Ended! 👏")}
                  onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef, start }) => (
                    <div className="counter__item counter__second">
                      <h4
                        className="counter__count counter__item counter__first-count"
                        ref={countUpRef}
                      ></h4>
                      <p className="counter__text counter__first-text">
                        lorem ipsum ip
                      </p>
                    </div>
                  )}
                </CountUp>
              </>
            ) : null}
          </div>
        )}
      </InView>
    </div>
  );
};

export default Counter;
