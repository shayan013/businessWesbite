import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./footerlist.css";
import { SiMinutemailer } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { BsMapFill } from "react-icons/bs";
function FooterList({ header }) {
  return (
    <div className="app__footerlist">
      <div className="footer-content ">
        {" "}
        {header == "explore" && (
          <>
            {" "}
            <h2 className="header">explore</h2>
            <ul className="list">
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  account
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  listing
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  about us
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  pricing pacakages
                </li>
              </a>
            </ul>
          </>
        )}
        {header == "quick links" && (
          <>
            {" "}
            <h2 className="header">quick links</h2>
            <ul className="list">
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  contact us
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  terms and condition
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  privacy
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  feedbacks
                </li>
              </a>
            </ul>
          </>
        )}
        {header == "catogries" && (
          <>
            {" "}
            <h2 className="header">catogries</h2>
            <ul className="list">
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  food and drinks
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  hotels
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  shopping
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  beauty
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_arrow">
                    <IoIosArrowForward />
                  </span>
                  fitness
                </li>
              </a>
            </ul>
          </>
        )}
        {header == "have a question" && (
          <>
            {" "}
            <h2 className="header">have a question?</h2>
            <ul className="list">
              <a href="#">
                <li>
                  <span className="icon_last_col">
                    <BsMapFill />
                  </span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </li>
              </a>

              <a href="#">
                <li>
                  <span className="icon_last_col">
                    <AiFillPhone />
                  </span>
                  0345987892
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon_last_col">
                    <SiMinutemailer />
                  </span>
                  shayanakhtar013@gmail.com
                </li>
              </a>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default FooterList;
