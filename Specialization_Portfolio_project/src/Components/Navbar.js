import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';



function Navbar() {
  return (
    <div className="menu_bar">
                <h1 className="logo">Azy<span>Events</span></h1>
                <ul className="main-ul">
                    <li><Link to="./Home">HOME</Link></li>
                    <li><Link to="./About">ABOUT US</Link></li>                 
                    <li className="service-li">SERVICES
                        <ul className="dropdown">
                        <li><Link to="./Wedding">WEDDING</Link></li>
                        <li><Link to="./SocialGathering">SOCIAL GATHERING</Link></li>
                        <li><Link to="./CorporateEvents">CORPORATE EVENTS</Link></li>  
                        </ul>
                    </li>
                    <li><Link to="./Gallary">GALLERY</Link></li>
                    <li><Link to="./Contact">CONTACT</Link></li>
                </ul>
            </div>
  )
}

export default Navbar
