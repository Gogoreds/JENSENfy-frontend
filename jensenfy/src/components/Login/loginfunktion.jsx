import { useNavigate } from "react-router-dom";
import React from 'react';
import { useRef, useState, useEffect } from 'react'
// import { useContext } from 'react'
//import AuthContext from './context/AuthProvider';

import axios from './api/axios';
const LOGIN_URL = '/login';
const REG_URL = '/newUser'





export default function Login() {



  const [authMode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  }




  //const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [register, setRegister] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userName, password])


  const handleRegister = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const RegConfiguration = {
      method: "post",
      url: REG_URL,
      data: {
        userName,
        password,
      },
    };

    // make the API call
    axios(RegConfiguration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const Navigate = useNavigate();

  ///HANDLE Login part.
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { 'Content-type': 'application/json' },
          withCredentials: false,

        }
      );
      //const token = response?.data?.token;
      //setAuth({ userName, password, token })
      //console.log(JSON.stringify(respone));
      setUserName('');
      setPassword('');
      Navigate("/authlog", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      }
      else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }

  }





  if (authMode === "signin") {
    return (
      <> {success ? (
        { handleLogin }
      ) : (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleLogin}>
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
                  id='userName'
                  ref={userRef}
                  name="userName"
                  value={userName}
                  placeholder="username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  className="form-control mt-1"

                  name="password"
                  type="password"
                  id='password'
                  value={password}
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


              </div>
            </div>
          </form>
        </div>
      )}</>
    )
  }
  // "Register page"
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => handleRegister(e)}>
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
            <button type="submit" className="btn btn-primary" onClick={handleRegister}>
              Registera
            </button>

            {/* display success message */}
            {register ? (
              <p className="text-success">You Are Now Registered Successfully</p>
            ) : (
              <p className="text-danger">Please register your account here</p>
            )}
          </div>

        </div>
      </form>
    </div>
  );
}
