import React from "react";
import '../styles/Footer.css'

const Footer = () => {

    return (
<div className="footer">
    <nav className="footer-nav">
    <ul>
       <li><a href="#profile" className="footer-button">Profile</a></li>
       <li><a href="#projects" className="footer-button">Projects</a></li>
       <li><a href="#contact" className="footer-button">Contact</a></li>
      </ul>
    </nav>
</div>
    )
}

export default Footer