import React from 'react'
import NavLoggedIn from '../navbars/NavLoggedIn'
import useAuth from '../../useAuth'





function SpotifyDashboard({ code }) {
  // const accessToken = useAuth(code)



  return (



    < div >
      <NavLoggedIn />
      SpotifyDashboard
      {code}



    </div>
  )
}

export default SpotifyDashboard