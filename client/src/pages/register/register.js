import React from 'react';
import './register.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)
  return (
    <div>
        <div className="container">
          <h1>Kind </h1>
          <p>Sign Up</p>
          <hr />

          <label><b>Username</b></label>
          <input type="text" placeholder="Enter username" name="username" required onChange={handleChange}/>
          <label ><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>
          <label ><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} />
          <label ><b>name</b></label>
          <input type="name" placeholder="name" name="name" required onChange={handleChange}/>

          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            
            <button onClick={handleClick} className="signupbtn">Register</button>
            

          </div>
        </div>
    </div>
  );
};

export default Register;
