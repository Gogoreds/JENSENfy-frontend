import React from "react";
import "./DashboardStyles.css";

const SearchResults = ({ track, chooseTrack }) => {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="searchResults"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="trackTitle">
        <div>{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  );
};

export default SearchResults;
