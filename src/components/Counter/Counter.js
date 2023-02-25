/** @format */
import CountUp from "react-countup";
import "./counter.scss";
import React from "react";

const Counter = () => {
  return (
    <div className="counter">
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
        ></CountUp>
        <CountUp>
          start={0}
          end={12092}
          duration={3}
          separator=" " decimals={0}
          decimal="," prefix="" suffix="" onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
        </CountUp>
      </>
    </div>
  );
};

export default Counter;
