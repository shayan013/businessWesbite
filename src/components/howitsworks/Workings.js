import React from "react";
import "./working.css";
import Steps from "./Steps";
import Heading from "../heading/Heading";
function Workings() {
  const flag = true;
  return (
    <div className="app__working">
      <div className="overlay"></div>
      <div className="container">
        <div className="working-title">
          <Heading
            flag={flag}
            smallHeading="LET'S FIND OUT"
            bigHeading="How It Works"
          />
        </div>

        <div className="row g-4 working_image">
          <Steps />
          <Steps />
          <Steps />
          <Steps />
        </div>
      </div>
    </div>
  );
}

export default Workings;
