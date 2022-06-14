import React from 'react'
import "./sideBar.css"

export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img className='sideBarImage'
                // src="../assests/img/aboutMe.jpg"
                src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Person">
            </img>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur delectus cum quibusdam veniam voluptatem quos
            </p>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="siderBarList">
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">TECH</li>
                <li className="sideBarListItem">SCIENCE</li>
                <li className="sideBarListItem">INDUSTRY</li>
                <li className="sideBarListItem">ENTERTAINMENT</li>
                <li className="sideBarListItem">ART</li>
            </ul>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
                <a href="https://www.facebook.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-facebook-f"></i></a>
                <a href="https://www.twitter.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
  )
}
