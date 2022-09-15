import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'



export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/UserLoggedIn");
  };


  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState([]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const [post, getPost] = useState([])


  const API = 'http://localhost:8080/';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }


  useEffect(() => {

    fetchPost("api/users").then((response) => setUser(response.data));
    fetchPost("api/users/newUser").then((response) => setNewUser(response.data));



  }, []);






  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode} >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Användarnamn </label>
              <input
                value={user}
                type="userName"
                className="form-control mt-1"
                placeholder="username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                value={password}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                onClick={navigateToLogin}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Registera Full Name</label>
            <input
              type="userName"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={newUser}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
