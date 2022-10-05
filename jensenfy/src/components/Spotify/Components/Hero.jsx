import { useState, useEffect } from "react";
import Heropic from "../../img/heropic.png";
import SearchResults from "./SearchResults";
import Player from "./Player";
import { BiSearchAlt } from "react-icons/bi";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import useAuth from "../../../useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: " 98d0e1254ee7455aa74f145f9ea5c783",
});

export default function Hero({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  useEffect(() => {
    if (!playingTrack) return;

    axios
      .get("http://localhost:8080/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div>
      <div className="hero">
        <img src={Heropic} alt="" className="heroImg" />
        <div className="searchBar">
          <input
            type="search"
            placeholder="What are we listening to today?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="magnifyingglass">
            <BiSearchAlt />
          </i>
        </div>
      </div>
      <div className="searchResults" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <SearchResults
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="lyrics" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
