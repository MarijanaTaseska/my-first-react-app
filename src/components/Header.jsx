import React from "react";
import '../styles/Header.css'
///import styling if you make them later with CSS

const Header = () => {
    return (
     <div className="header-div">
        <header className="header">
            <div className="logo">
            <h1>My Portfolio</h1> 
            </div>
             <nav>
              <ul className="nav-links">
                <li><a href="#profile" className="nav-button">Profile</a></li>
                <li><a href="#projects" className="nav-button">Projects</a></li>
                <li><a href="#contact" className="nav-button">Contact</a></li>
              </ul>
             </nav>
        </header>
        </div>
    )
}

export default Header;