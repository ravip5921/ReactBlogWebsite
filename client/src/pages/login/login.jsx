// import React from 'react';
// import {Link} from 'react-router-dom';
// import "./login.css"
// export default function Login() {
//   return (
//     <div className='login'>
//         <span className="loginTitle">Log In</span>
//         <form className="loginForm">
//             <label>Email</label>
//             <input className='loginInput' type="text" placeholder='Enter email'/>
//             <label>Password</label>
//             <input className='loginInput' type="password" placeholder='Enter password'/>

//             <button className="loginButton">Login</button>
//         </form>
//         <button className="lRegisterButton">
//           <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
//           </button>
//     </div>
//   )
// }

import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./login.css";

export default function Login() {


  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching} = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await  axios.post("http://localhost:7000/api/auth/login", {
        username : userRef.current.value,
        password : passwordRef.current.value,
      });
      return dispatch({type:"LOGIN_SUCCESS",payload:res.data});
 
    } catch(err){
       return dispatch({type:"LOGIN_FAILURE"});
    } 
  };

  return (
    <div className='body'>
    <div className='background'>
        <form className="loginForm" onSubmit={handleLogin}>
            <span className="loginTitle">Log In</span>
            
            <label htmlFor="loginInput" className="formLabel">Enter Username</label>
            <input type="text" className="loginInput" placeholder='Enter your username' 
              ref={userRef}/>
            
            <label htmlFor="loginInput" className="formLabel">Enter Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password'
               ref={passwordRef} />
            
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            {/* <h3 className="registerLabel">New here?</h3> */}
        </form>
    </div>
    <button className="lRegisterButton">
        <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
    </button>
    </div>
  )
}
