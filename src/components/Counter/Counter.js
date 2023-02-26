/** @format */
import CountUp from "react-countup";
import "./counter.scss";
import React, { useEffect, useRef, useState, useMemo } from "react";

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

const Counter = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log("isInViewport1: ", isInViewport1);

  const isInViewport2 = useIsInViewport(ref2);
  console.log("isInViewport2: ", isInViewport2);

  return (
    <>
      <div className="counter">
        <div className="counter__inner">
          <div ref={ref1}>
            <CountUp
              start={isInViewport1 ? 0 : null}
              end={1605}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              prefix=" "
              suffix=" m²"
            >
              {({ countUpRef, start }) => (
                <div className="counter__item counter__first">
                  <span
                    className="counter__count counter__first-count"
                    ref={countUpRef}
                  />
                  <p className=" counter__text counter__first-text">
                    lorem ipsum
                  </p>
                </div>
              )}
            </CountUp>
          </div>

          <div ref={ref2}>
            <CountUp
              start={isInViewport2 ? 0 : null}
              end={1605}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              prefix=" "
              suffix=" St"
            >
              {({ countUpRef, start }) => (
                <div className="counter__item counter__second">
                  <span
                    className="counter__count counter__first-count"
                    ref={countUpRef}
                  />
                  <p className=" counter__text counter__first-text">
                    lorem ipsum
                  </p>
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
