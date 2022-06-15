import React from "react";
import {Link} from 'react-router-dom';
import "./topBar.css";

export default function TopBar () 
{
    const user = false;
    return (
        <div className="topBar">
            <div className="topLeft">
                <a href="https://www.facebook.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-facebook-f"></i></a>
                <a href="https://www.twitter.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-instagram"></i></a>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link>
                        </li>
                    <li className="topListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>LOG OUT</Link>
                    </li>
                </ul>
            </div>

            <div className="topRight">
                { user ? (
                        <img className="topBarImage"
                src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
                alt="User">

                </img>
                ):
                <ul className="topList">
                <li className="topListItem">
                    <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Log In</Link>
                </li>
                <li className="topListItem">
                <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
                </li>
                </ul>
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}