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
            <p className='sideBarDes'>
                I’m Ravi Pandey, a computer engineering student, who is eager to complete the degree and be a professional as soon as possible. I am the developer of this blog site...... well I just follwoed along a great tutorial from the website, but I guess that still counts as a begineer's project. I can help you or your organization improve productivity through my workshops, consulting, or keynote speeches. I’m passionate about communication and your success is my business.
            </p>
        </div>
        {/* <div className="sideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="siderBarList">
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">TECH</li>
                <li className="sideBarListItem">SCIENCE</li>
                <li className="sideBarListItem">INDUSTRY</li>
                <li className="sideBarListItem">ENTERTAINMENT</li>
                <li className="sideBarListItem">ART</li>
            </ul>
        </div> */}
        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW ME</span>
            <div className="sideBarSocial">
                <a href="https://www.facebook.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-facebook-f"></i></a>
                <a href="https://www.twitter.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com" style={{textDecoration:"none", color:"inherit"}}><i className="sideBarIcon fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
  )
}
