import React from "react";
import "./SpotifyDashboardStyles.css";
import { LeftSideBar } from "./Components/LeftSideBar";
import { Dashboard } from "./Components/Dashboard";
import { RightSideBar } from "./Components/RightSideBar";

// import NavLoggedIn from "../navbars/NavLoggedIn";
//import useAuth from '../../useAuth'

function SpotifyDashboard() {
  //const accessToken = useAuth(code)

  return (
    <div className="SpotifyDashboard">
      <LeftSideBar />
      <Dashboard />
      <RightSideBar />
      {/* <NavLoggedIn /> */}
      SpotifyDashboard
      <div className="background"></div>
    </div>
  );
}

export default SpotifyDashboard;
