import React from "react";
///import styling if you make them later with CSS

const Header = () => {
    return (<div>
        <header className="header">
            <div className="logo">
            <h1>My Portfolio</h1> 
            </div>
             <nav>
              <ul>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
             </nav>
        </header>
        </div>
    )
}

export default Header;