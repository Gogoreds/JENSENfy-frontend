//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';



export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  // const navigate = useNavigate();

  // const navigateToLogin = () => {
  //   navigate("/UserLoggedIn");
  // };


  const [APIData, setAPIData] = useState([]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");



  const postData = () => {
    axios.post(`http://localhost:8080/api/users/newUser`, {
      userName,
      password
    })
  }

  useEffect(() => {

    axios.get(`http://localhost:8080/api/users`)
      .then((response) => {
        setAPIData(response.data);
      })



  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
  }




  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode} >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username </label>
              <input
                className="form-control mt-1"

                name="username"
                value={userName}
                placeholder="username"
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                className="form-control mt-1"

                name="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button

                type="submit"
                className="btn btn-primary"
              >
                Logga in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  // "Register page"
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
              className="form-control mt-1"

              name="userName"
              value={userName}
              placeholder="userName"
              onChange={(event) => setUserName(event.target.value)}

            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              className="form-control mt-1"
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={postData}>
              {/* onClick={() => {
               post("/api/users/newUser", {
                newUserName: newUserName,
                newPassword: newPassword,
                 });
                fetchPost("api/users").then((response) => setNewUser(response.data));

                 }}> */}
              Registera
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
