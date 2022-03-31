import React from "react";
import "./testimonials.css";
import Testimonial from "./Testimonial";
import Heading from "../heading/Heading";
function Testimonials() {
  return (
    <div className="app__testimonials">
      <div className="container">
        <div className="tetimonials_titles">
          <Heading smallHeading="TESTIMONIAL" bigHeading="Happy People" />
        </div>
        <div className="row g-3">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
