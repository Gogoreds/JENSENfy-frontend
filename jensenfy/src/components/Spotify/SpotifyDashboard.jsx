import React from "react";
import "./SpotifyDashboardStyles.css";
import { LeftSideBar } from "./Components/LeftSideBar";
import { Dashboard } from "./Components/Dashboard";
import { RightSideBar } from "./Components/RightSideBar";

// import NavLoggedIn from "../navbars/NavLoggedIn";
//import useAuth from '../../useAuth'

function SpotifyDashboard({ code }) {
  //const accessToken = useAuth(code)

  return (
    <div className="SpotifyDashboard">
      <LeftSideBar />
      <Dashboard />
      <RightSideBar />
      <div className=""></div>
      {/* <NavLoggedIn /> */}
      SpotifyDashboard
      {code}
      <div className="background"></div>
    </div>
  );
}

export default SpotifyDashboard;
