import React from "react";
import SpotifyLogin from "../SpotifyLogin";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Dashboard from "./Dashboard";

function Loggedinprofile() {
  return (
    <div>
      <SpotifyLogin />
      <LeftSideBar />
      <Dashboard />
      <RightSideBar />
      Loggedinprofile
    </div>
  );
}

export default Loggedinprofile;
