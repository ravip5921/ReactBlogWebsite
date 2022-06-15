import React from 'react';
// import { Link } from 'react-router-dom';
import "./login2.css";

export default function Login2() {
  return (
    <>
    <div className='background'>
        <div className="shape"></div>
        <div className="shape"></div>
        <form className="loginform">
            <label htmlFor="loginInput" className="formLabel">Username</label>
            <input type="text" className="loginInput" placeholder='Enter your username' />
            <label htmlFor="loginInput" className="formLabel">Username</label>
            <input type="text" className="loginInput" placeholder='Enter your username' />
        </form>
    
    </div>
    <button className="lRegisterButton">
        Register
        {/* <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link> */}
    </button>
    </>
  )
}
