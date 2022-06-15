import React from "react";
import "./header.css"

export default function Header()
{
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">My Personal</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img className="headerImage"
            src="https://images.pexels.com/photos/2096625/pexels-photo-2096625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Page Background">
            </img>
        </div>
    )
}