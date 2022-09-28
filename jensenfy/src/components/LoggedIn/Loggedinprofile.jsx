import React from "react";
import SpotifyLogin from "../SpotifyLogin";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Dashboard from "./Dashboard";
import NavLoggedIn from "../navbars/NavLoggedIn"

function Loggedinprofile() {
  return (
    <div>
      <NavLoggedIn />
      <SpotifyLogin />
      <LeftSideBar />
      <Dashboard />
      <RightSideBar />
      Loggedinprofile
    </div>
  );
}

export default Loggedinprofile;
