import React from 'react'
import {Link} from 'react-router-dom';
import "./register.css"
export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
        <form className="registerForm">
             <label>Username</label>
            <input className='registerInput' type="text" placeholder='Enter Username'/>
            <label>Email</label>
            <input className='registerInput' type="text" placeholder='Enter Email'/>
            <label>Password</label>
            <input className='registerInput' type="password" placeholder='Enter Password'/>

            <button className="registerButton">Register</button>
        </form>
        <button className="rLoginButton">
          <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Log In</Link>
        </button>
    </div>
  )
}
