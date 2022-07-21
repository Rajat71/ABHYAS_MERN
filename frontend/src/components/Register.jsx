import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function register() {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid input");
    }
  }

  return (
    <div className="right">
      <input
        name="name"
        type="text"
        onChange={handleChange}
        placeholder="Name"
        value={user.name}
      />
      <input
        name="email"
        type="email"
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
      <input
        name="reEnterPassword"
        type="password"
        onChange={handleChange}
        placeholder="Confirm Password"
        value={user.reEnterPassword}
      />
      <button onClick={register} type="submit" className="submit cursor">
        Register
      </button>
    </div>
  );
}

export default Register;
