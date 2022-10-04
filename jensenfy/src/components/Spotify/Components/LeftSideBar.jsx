import React from "react";
import "./LeftSideBarStyles.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menus } from "./Menus";
import { SideBarMenu } from "./SideBarMenu";
import { FavPlaylists } from "./FavPlaylists";
import { Tracklist } from "./Tracklist";

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
      <Menus title={"Menu"} menuObjects={SideBarMenu} />
      <FavPlaylists />
      <Tracklist trackName={"Track Name"} artistName={"Artist Name"} />
    </div>
  );
}

export { LeftSideBar };
