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
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);




  useEffect(() => {

    // axios.get(`http://localhost:8080/api/users`)
    //   .then((response) => {
    //     setAPIData(response.data);
    //   })



  }, []);





  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: 'http://localhost:8080/api/users/newUser',
      data: {
        userName,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };



  ///test 

  const handleLogin = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Logged in");
  }

  const configurations = {
    method: "post",
    url: 'http://localhost:8080/api/login',
    data: {
      userName,
      password,
    },
  };

  axios(configurations)
    .then((result) => { console.log(result); })
    .catch((error) => { console.log(error); })



  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={(e) => handleLogin(e)}>
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
                onClick={(e) => handleLogin(e)}
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
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Go to Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Register Your Username here</label>
            <input
              className="form-control mt-1"

              name="userName"
              value={userName}
              placeholder="ure username here:"
              onChange={(event) => setUserName(event.target.value)}

            />
          </div>

          <div className="form-group mt-3">
            <label>Register Youre password</label>
            <input
              className="form-control mt-1"
              type="password"
              name="password"
              value={password}
              placeholder="ure password here"
              onChange={(event) => setPassword(event.target.value)}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Registera
            </button>

            {/* display success message */}
            {register ? (
              <p className="text-success">You Are Now Registered Successfully</p>
            ) : (
              <p className="text-danger">Please register your account here</p>
            )}
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
