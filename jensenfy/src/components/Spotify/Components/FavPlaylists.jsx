import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { SideBarPlaylist } from "./SideBarPlaylist";
import "./LeftSideBarStyles.css";

function FavPlaylists() {
  return (
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>Playlists:</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playlistScroll">
        {SideBarPlaylist &&
          SideBarPlaylist.map((list) => (
            <div className="playlist">
              <i>
                <BsMusicNoteList />
              </i>
              <p>Blabla</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export { FavPlaylists };
