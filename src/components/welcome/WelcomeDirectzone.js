import React from "react";
import "./welcome.css";
import Heading from "../heading/Heading";
import Box from "./Box";
function WelcomeDirectzone() {
  const flag = "left-align";
  return (
    <div className="app__welcome">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="welcome-image"></div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="welcome-content">
              <Heading
                flag={flag}
                smallHeading="WELCOME TO DIRECTONE"
                bigHeading="Directone A Directory & Listing"
              />
              <p className="para1">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p className="para2">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="row  data-boxes g-2 g-sm-5 my-5 d-flex align-items-strech">
                <Box digit="50" info="YEARS OF EXPERIENCED" />
                <Box digit="210k" info="total listing" />
                <Box digit="450" info="company staff" />
                <Box digit="100" info="happy people" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeDirectzone;
