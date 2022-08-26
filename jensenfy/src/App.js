import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SpotifyLogin from './components/SpotifyLogin';
import LoginPage from './components/LoginPage';
import Startpage from './components/Startpage';
import NavMenu from './components/NavMenu';
import Errorpage from './components/Errorpage'



function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SpotifyLogin' element={<SpotifyLogin />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router >
  );
}

export default App;
