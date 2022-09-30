import React from 'react'
import SpotifyDashboard from './SpotifyDashboard'
import Authlogin from './Authlogin'

const code = new URLSearchParams(window.location.search).get('code')

function Authlog() {
  return code ? <SpotifyDashboard code={code} /> : <Authlogin />
}

export default Authlog