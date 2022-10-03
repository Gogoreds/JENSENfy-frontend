import React from "react";
import "./SpotifyDashboardStyles.css";
// import NavLoggedIn from "../navbars/NavLoggedIn";
import LeftSideBar from "../LoggedIn/LeftSideBar";
import RightSideBar from "../LoggedIn/RightSideBar";
import Dashboard from "../LoggedIn/Dashboard";
//import useAuth from '../../useAuth'

function SpotifyDashboard({ code }) {
  //const accessToken = useAuth(code)

  return (
    <div className="App">
      <div className=""></div>
      {/* <NavLoggedIn /> */}
      <LeftSideBar />
      <Dashboard />
      <RightSideBar />
      SpotifyDashboard
      {code}
      <div className="background"></div>
    </div>
  );
}

export default SpotifyDashboard;
