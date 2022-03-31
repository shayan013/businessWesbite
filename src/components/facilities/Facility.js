import React from "react";
import "./facility.css";

function Facility({ item, icon, number }) {
  return (
    <div className="facility text-center col-md-4 col-lg-2">
      <div className="facility-content">
        <div className="facility-icon mb-3">{icon}</div>

        <h3 className="mb-3">{item}</h3>
        <p className="listing">
          <span className="number">{number}</span> Listing
        </p>
      </div>
    </div>
  );
}

export default Facility;
