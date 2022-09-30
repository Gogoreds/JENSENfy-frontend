import React from 'react'
import NavLoggedIn from '../navbars/NavLoggedIn'

import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e0f5f7e3f9f74e39bb43ca5b2ccdb4e4&response_type=code&redirect_uri=http://localhost:3000/authlog&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


function Authlogin() {
  return (
    <div>
      <NavLoggedIn />
      authlogin

      <br />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>



    </div>
  )
}

export default Authlogin