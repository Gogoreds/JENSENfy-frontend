import React from "react";
import Track from "../../img/track.png";
import "./LeftSideBarStyles.css";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

function Tracklist({ trackName, artistName }) {
  return (
    <div className="tracklist">
      <div className="top">
        <img src={Track} />
        <p className="trackName">
          {trackName} <span className="trackSpan">{artistName}</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>

        <input type="range" />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { Tracklist };
