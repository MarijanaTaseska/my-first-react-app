
import React from "react";
import ResumeButton from "./ResumeButton";

const ResumeComponent = () => {
    const sectionStyle = {
        padding: '40px',
        textAlign: 'center',
      };
    
      const titleStyle = {
        fontSize: '2.5rem'
      };
    
    
      const contactStyle = {
        fontSize: '1rem',
        color: 'black',
      };
    
      const paragraphStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.6',
      };
      const linkStyle = {
        color: 'black',  // Custom link color
        textDecoration: 'none',  // Remove underline
        fontWeight: 'bold',  // Make it stand out
        margin:' 10px'
      };
      const linkHoverStyle = {
        color: '#a1a4a1eb',  // Color change on hover
      };
      const buttonSectionStyle = {
        textAlign:"center",
        margin: '10px',
        padding:'10px',
      };
      // Link hover effect state
      const [hovered, setHovered] = React.useState(null);
    
      const handleMouseEnter = (name) => {
        setHovered(name);
      };
    
      const handleMouseLeave = () => {
        setHovered(null);
      };
    return (
      
        <div style={sectionStyle}>
        <h2 style={titleStyle}>Marijana Mirchevski</h2>
        <h3>Full Stack Web Developer</h3>
        <div style={contactStyle}>
          Las Vegas, NV |
           <a 
           href="tel:+17024657151"
           style={hovered === 'phone' ? { ...linkStyle, linkHoverStyle} : linkStyle}
           onMouseEnter={() => handleMouseEnter('phone')}
           onMouseLeave={handleMouseLeave}
           >702-465-7151</a> | 
           <a 
           href="mailto:marijana.taseska@gmail.com"
           style={hovered === 'email' ? { ...linkStyle, linkHoverStyle} : linkStyle}
           onMouseEnter={() => handleMouseEnter('email')}
           onMouseLeave={handleMouseLeave}> marijana.taseska@gmail.com</a> | 
           <a 
           href="https://github.com/MarijanaTaseska" 
           target="_blank" 
           rel="noopener noreferrer"
           style={hovered === 'github' ? { ...linkStyle, linkHoverStyle} : linkStyle}
           onMouseEnter={() => handleMouseEnter('github')}
           onMouseLeave={handleMouseLeave}
           > GitHub</a> | 
           <a 
           href="https://www.linkedin.com/in/marijana-mirchevski" 
           target="_blank" 
           rel="noopener noreferrer"
           style={hovered === 'linkedin' ? { ...linkStyle, linkHoverStyle} : linkStyle}
           onMouseEnter={() => handleMouseEnter('linkedin')}
           onMouseLeave={handleMouseLeave}
           > LinkedIn</a>
        </div>
        
        <p style={paragraphStyle}>As a Full Stack Web Developer, I specialize in building dynamic, responsive web applications with a focus on both front-end and back-end development. I have hands-on experience using React.js, Redux, Node.js, and RESTful APIs, and have successfully integrated authentication systems, live data from APIs, and testing frameworks into complex projects.</p>
        <p style={paragraphStyle}>
          I am a skilled web developer with experience in front-end and back-end technologies.
          Click below to download or view my full resume.
        </p>
        
        <div style={buttonSectionStyle}> 
        <ResumeButton
          text="View Resume"
          href="/marijanaResume.pdf"
          download={false}  // Open resume in new tab
        />
        <ResumeButton
          text="Download Resume"
          href="/marijanaResume.pdf"
          download={true}  // Automatically download resume
        />
      </div>
      </div>
    );
  };
  
  export default ResumeComponent;