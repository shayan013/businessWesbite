import React from "react";
import "./testimonial.css";
function Testimonial() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="main-content">
        <p className="para">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="profile d-flex align-items-center">
          <div className="profile_pic"></div>
          <div className="profile-info">
            <p className="name">Roger Scott</p>
            <p className="designation">MARKETING MANAGER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
