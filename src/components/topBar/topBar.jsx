import React from "react";
import "./topBar.css";

export default function TopBar () 
{
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-f"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">LOG OUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img className="topBarImage"
                src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
                alt="User">

                </img>
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}