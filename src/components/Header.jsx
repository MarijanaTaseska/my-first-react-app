import React from "react";
///import styling if you make them later with CSS

const Header = () => {
    return (<div>
        <header className="header">
            <div className="logo">
             My Portfolio
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