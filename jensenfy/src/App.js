import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SpotifyLogin from './components/SpotifyLogin';
import LoginPage from './components/Login/LoginPage';
import Startpage from './components/Startpage';
import Errorpage from './components/Login/Errorpage'
import About from './components/About';
import Loggedinprofile from './components/LoggedIn/Loggedinprofile';
import Authlogin from "./components/Spotify/Authlogin";
import Authlog from "./components/Spotify/Authlog";
import SpotifyDashboard from "./components/Spotify/SpotifyDashboard";

// const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path='/About' element={<About />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SpotifyLogin' element={<SpotifyLogin />} />
        <Route path='/mypage' element={<Loggedinprofile />} />
        <Route path='/authlogin' element={<Authlogin />} />
        <Route path='/authlog' element={<Authlog />} />
        <Route path='/spotifydashboard' element={<SpotifyDashboard />} />

        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router >
  );
}

export default App;
