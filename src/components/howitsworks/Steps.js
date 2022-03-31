import React from "react";
import "./steps.css";
function Steps() {
  return (
    <div className="app__steps col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <div className="row g-3">
          <div className="col-12">
            <div className="icon"></div>
          </div>
          <div className="col-12">
            {" "}
            <div className="text">
              <h2>1. Choose A Category</h2>{" "}
            </div>
          </div>
          <div className="col-12">
            <p className="descrp">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
