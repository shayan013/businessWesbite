import React from "react";
import "./heading.css";
function Heading({ smallHeading, bigHeading, flag }) {
  return (
    <div className="app__heading mb-5">
      <p className={`subheading ${flag == "left-align" ? "" : "text-center"}`}>
        {smallHeading}
      </p>
      <h1
        className={`heading ${flag == "left-align" ? "" : "text-center"} ${
          flag == true ? "color_white" : ""
        }`}
      >
        {bigHeading}
      </h1>
    </div>
  );
}

export default Heading;
