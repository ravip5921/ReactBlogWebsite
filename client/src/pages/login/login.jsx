import React from 'react';
import {Link} from 'react-router-dom';
import "./login.css"
export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Log In</span>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="text" placeholder='Enter email'/>
            <label>Password</label>
            <input className='loginInput' type="password" placeholder='Enter password'/>

            <button className="loginButton">Login</button>
        </form>
        <button className="lRegisterButton">
          <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
          </button>
    </div>
  )
}