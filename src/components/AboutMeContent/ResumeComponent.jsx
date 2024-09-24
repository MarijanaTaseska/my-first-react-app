
import React from "react";
import ResumeButton from "./ResumeButton";

const ResumeComponent = () => {
    const sectionStyle = {
        backgroundColor: '#f4f4f9',
        color: '#333',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      };
    
      const titleStyle = {
        fontSize: '2.5rem',
        color: '#0b6265',
        marginBottom: '10px',
      };
    
      const subTitleStyle = {
        fontSize: '1.8rem',
        color: '#0b6265',
        marginBottom: '20px',
      };
    
      const contactStyle = {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '20px',
      };
    
      const paragraphStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginBottom: '20px',
      };
      const linkStyle = {
        color: '#0b6265',  // Custom link color
        textDecoration: 'none',  // Remove underline
        fontWeight: 'bold',  // Make it stand out
        margin: '0 10px',  // Add some space between links
        transition: 'color 0.3s ease',  // Add transition effect
      };
      const linkHoverStyle = {
        color: '#45a049',  // Color change on hover
      };
      // const containerStyle = {
      //   display: 'flex',
      //   justifyContent: 'space-between',
      //   alignItems: 'center',
      //   backgroundColor: '#f4f4f9',
      //   padding: '40px',
      //   borderRadius: '10px',
      //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      //   maxWidth: '800px',
      //   margin: '0 auto',
      // };
      const buttonSectionStyle = {
        display: 'flex',
        textAlign:"center",
        flexDirection: 'row',
        gap: '10px',  // Adds space between the buttons
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
        <h3 style={subTitleStyle}>Full Stack Web Developer</h3>
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