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
            <div className="playlist" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export { FavPlaylists };
