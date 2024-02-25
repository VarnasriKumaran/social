import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './login.css'
import {AuthContext} from "../../context/authContext";
import { useContext,useState } from 'react';

const Login = () => {
  const {login}=useContext(AuthContext);
  const [inputs,setInputs]=useState({
    username:"",
    password:"",
  })
  const[err,setErr]=useState(null);
  const navigate=useNavigate()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div>

      <div className="content">
        <div className="flex-div">
          <div className="name-content">
            <h1 className="logo">Kind</h1>
            <p>Post and Connect</p>
          </div>
          <form>
            <input type="text" placeholder="username" required onChange={handleChange}/>
            <input type="password" placeholder="password" required onChange={handleChange}/>
            <button onClick={handleLogin} className="login">Log In</button>
            <Link to="/register">
  <button className="create-account">Create New Account</button>
</Link>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
