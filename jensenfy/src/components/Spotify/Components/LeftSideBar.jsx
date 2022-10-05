import React from "react";
import "./LeftSideBarStyles.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { Menus } from "./Menus";
import { SideBarMenu } from "./SideBarMenu";

function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <div className="jensenfyLogo">
        <i>
          <FaSpotify />
        </i>
        <h3>Jensenfy</h3>
        <i className="dots">
          <FaEllipsisH />
        </i>
      </div>
      <div className="profilePicture">
        <img
          src="https://t2.ea.ltmcdn.com/en/razas/4/5/5/smooth-collie_554_0_600.jpg"
          alt=""
          width={150}
          height={150}
        />
      </div>

      <Menus menuObjects={SideBarMenu} />
    </div>
  );
}

export { LeftSideBar };
