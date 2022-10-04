import React from "react";
import Heropic from "../../img/heropic.png";
import Check from "../../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero">
      <img src={Heropic} alt="" className="heroImg" />
      <div className="content">
        <div className="breadcrumbs">
          <p>
            Home <span>/ Verified Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="band">
          <div className="left">
            <div className="name">
              <img src={Check} alt="" />
              <h2>Anathema</h2>
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              1.2M <span>Monthly listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export { Hero };
