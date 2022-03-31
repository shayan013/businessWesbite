import React from "react";
import "./card.css";
import { BsHeart } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
function Card() {
  return (
    <div className="app__card col-lg-3 col-md-6">
      <div className="card-container">
        <div className="img"></div>
        <div className="card-content text-center">
          <p className="food-type">foods and drink</p>
          <h2 className="res-name mb-3">japnese restaurent</h2>
          <p className="address">
            <span className="location_icon">
              <GoLocation />
            </span>
            Suite 721 New York NY 10016
          </p>
          <p className="contact_no">
            <span className="phone_icon">
              <AiTwotonePhone />
            </span>
            +00 123 456 7890
          </p>
          <div className="border_bottom"></div>
          <div className="reviews d-flex align-items-center pt-3">
            <p className="review mb-0">
              Review
              <span className="rattings">5/5</span>
              <span className="no_of_reviews">
                <div className="star_icon">
                  <span class="fa fa-star checked"></span>
                </div>
                (100)
              </span>
            </p>
            <div className="heart-icon d-flex align-items-center justify-content-center">
              <BsHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
