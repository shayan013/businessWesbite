import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import FooterList from "./FooterList";
function Footer() {
  const header = ["explore", "quick links", "catogries", "have a question"];
  return (
    <div className="app__footer">
      <div className="container">
        {" "}
        <div className="row g-md-3 g-5">
          <div className="about col-lg col-md-6">
            <div className="name">
              {" "}
              <span className="mb-0">directone</span>
              <small>director and listing</small>
            </div>
            <div className="description">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </div>
            <div className="connect_us d-flex align-itmes-center mt-3">
              <div className="fb_icon mr-3">
                <BsFacebook />
              </div>
              <div className="twitter_icon mr-3">
                <BsTwitter />
              </div>
              <div className="insta_icon">
                <BsInstagram />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <FooterList header={header[0]} />
          </div>
          <div className="col-lg-2 col-md-6">
            <FooterList header={header[1]} />
          </div>
          <div className="col-lg-2 col-md-6">
            <FooterList header={header[2]} />
          </div>
          <div className="col-lg col-md-6">
            <FooterList header={header[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
