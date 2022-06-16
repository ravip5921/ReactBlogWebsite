import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";
import "./register.css"
export default function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitData = async (e) => {
    e.preventDefault(); // to prevent loading of page on submit
    try{
      setError(false);
    const res = await axios.post("http://localhost:7000/api/auth/register/" , {
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
  }catch(err){
    setError(true)
  }
    
  };
    return (
    <div className='register'>
      <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={submitData}>
             <label className='registerIpLabel'>Username</label>
            <input className='registerInput' type="text" placeholder='Enter Username'
              onChange={e=>setUsername(e.target.value)}/>
            <label className='registerIpLabel'>Email</label>
            <input className='registerInput' type="text" placeholder='Enter Email'
              onChange={e=>setPassword(e.target.value)}/>
            <label className='registerIpLabel'>Password</label>
            <input className='registerInput' type="password" placeholder='Enter Password'
              onChange={e=>setEmail(e.target.value)}/>

            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="rLoginButton">
          <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Log In</Link>
        </button>
        {error && <span className='errorText'>Supplied information is not viable!</span>}
    </div>
  )
}
