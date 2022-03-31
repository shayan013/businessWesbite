import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="app__banner">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-12">
            <div className="banner-image"></div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="content row g-0 align-items-center">
              <div className="content_titles col-md-8">
                <p className="specialOffers">special offers</p>
                <h1>We Have Special Offers Every Now and Then</h1>
              </div>
              <div className="button_specialOffer col-md-4">
                <a href="#">
                  <button className="btn btn-dark w-100">
                    show special offers
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
