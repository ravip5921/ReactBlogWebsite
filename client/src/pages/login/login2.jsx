import React from 'react';
import { Link } from 'react-router-dom';
import "./login2.css";

export default function Login2() {
  return (
    <>
    <div className='background'>
        <form className="loginForm">
            <h2 className="title">Log In</h2>
            <label htmlFor="loginInput" className="formLabel">Enter Email</label>
            <input type="text" className="loginInput" placeholder='Enter your email' />
            <label htmlFor="loginInput" className="formLabel">Enter Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password' />
            <button className="loginButton">Login</button>
            {/* <h3 className="registerLabel">New here?</h3> */}
        </form>
    </div>
    <button className="lRegisterButton">
        <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
    </button>
    </>
  )
}
