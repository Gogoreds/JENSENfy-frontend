import React from "react";
import "./DashboardStyles.css";
import Hero from "./Hero";
import useAuth from "../../../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

function Dashboard() {
  return (
    <div className="dashboard">
      <Hero />
      <div className="playlist"></div>
    </div>
  );
}

export { Dashboard };
