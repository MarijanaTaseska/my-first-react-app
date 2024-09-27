import React from "react";
import '../styles/Header.css'

const Header = () => {
    return (
     <div className="header-div">
        <header className="header">
        <div class="logo">
  <div class="outer-circle"></div>
  <div class="inner-circle"></div>
</div>
            <div className="portfolio">
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