import React from "react";
import NavLoggedIn from "../navbars/NavLoggedIn";
import SpotifyLogin from "../SpotifyLogin";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Dashboard from "./Dashboard";

function Loggedinprofile() {
  return (
    <div>
      <LeftSideBar />
      <Dashboard />
      <RightSideBar />
      {/* <NavLoggedIn />
      <SpotifyLogin /> */}
      Loggedinprofile
    </div>
  );
}

export default Loggedinprofile;
