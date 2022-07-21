import React, { useState, useEffect, useRef } from "react";
import "./login.css";

import Google from "./img/google.png";
import Facebook from "./img/facebook.png";
import Github from "./img/github.png";
// import jwt from "jsonwebtoken";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      props.user(res.data.user);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Username"
            value={user.email}
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={user.password}
          />
          <button onClick={login} type="submit" className="submit cursor">
            Login
          </button>
          <br />
          <Link to="/login/register" className="cursor">
            If not Register, Click Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
