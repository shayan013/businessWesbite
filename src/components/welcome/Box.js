import React from "react";
import "./box.css";
function Box({ digit, info }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="box">
        <span className="digit">{digit}</span>
        <p className="info">{info}</p>
      </div>
    </div>
  );
}

export default Box;
