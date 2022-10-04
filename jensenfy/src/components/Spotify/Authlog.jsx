import React from "react";
//import Dashboard from '../LoggedIn/Dashboard'
import Authlogin from "./Authlogin";
import SpotifyDasshboard from "./SpotifyDashboard";

const code = new URLSearchParams(window.location.search).get("code");

function Authlog() {
  return code ? <SpotifyDasshboard code={code} /> : <Authlogin />;
}

export default Authlog;
