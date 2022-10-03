import React from 'react'
//import Dashboard from '../LoggedIn/Dashboard'
import Authlogin from './Authlogin'
import Loggedinprofile from '../LoggedIn/Loggedinprofile'

const code = new URLSearchParams(window.location.search).get('code')

function Authlog() {
  return code ? <Loggedinprofile code={code} /> : <Authlogin />
}

export default Authlog