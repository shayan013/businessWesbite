import React from "react";
import "./hero.css";
import { BsSearch } from "react-icons/bs";
import { GoSearch, GoLocation } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
function Hero() {
  return (
    <div className="app__hero">
      <div className="overlay"></div>
      <div className="container">
        {" "}
        <div className="row justify-content-center align-items-center slider-text">
          <div className="col-lg-8 text-center pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h1>Let's Explore Your Awesome City</h1>
                <p>
                  Find great places to stay, eat, shop, or visit from local
                  experts.
                </p>
              </div>
            </div>
            <form action="#" className="search-property-1 mt-md-5">
              <div className="row g-0">
                <div className="col-md d-flex">
                  <div className="form-group p-3">
                    <div className="form-field">
                      <div className="icon">
                        <BsSearch />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What are you looking for?"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group p-3">
                    <div className="form-field">
                      <div className="icon">
                        <GoLocation />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search location"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group p-3">
                    <div className="form-field">
                      <div className="icon">
                        <RiArrowDropDownLine />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="All catogories"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group">
                    <div className="form-field d-flex justify-content-strech w-100">
                      <a
                        href="#"
                        className="btn btn-primary   d-flex w-100 justify-content-center align-items-center py-3"
                      >
                        <div>
                          <GoSearch />
                        </div>
                        <button className="search"> Search</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
