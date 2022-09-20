import React from "react";
import { Container } from "react-bootstrap";
import NavMenu from "./navbars/NavMenu";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=98d0e1254ee7455aa74f145f9ea5c783&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function SpotifyLogin() {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Connect and get started with Spotify
        </a>
      </Container>
    </div>
  );
}
