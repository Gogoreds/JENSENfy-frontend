import React from "react";
import "./LeftSideBarStyles.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <div className="jensenfyLogo">
        <i>
          <FaSpotify />
        </i>
        <h3>Jensenfy</h3>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="What are we listening to?" />
        <i className="magnifyingglass">
          <BiSearchAlt />
        </i>
      </div>
    </div>
  );
}

export { LeftSideBar };
