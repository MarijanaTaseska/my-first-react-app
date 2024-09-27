import React from "react";
import './information.css'

const InformationAboutMe = () => {
  const animated = {
    opacity: '0', /* Start hidden */
    transform: 'translateY(20px)', /* Start slightly off-screen */
    animation: 'fadeInUp 1s ease-in-out forwards',
  }
  const sectionStyle = {
    padding: '2%',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
    backgroundColor: '#f9f9f939',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const contactInfoStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const linkStyle = {
    color:'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    padding:'5%',
  };

  const linkHoverStyle = {
    color:'rgba(149, 149, 148, 0.96)',
  };

  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (name) => {
    setHovered(name);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="information-container">
    <div style={sectionStyle} className="information-div">
      <h2 style={titleStyle}>Contact Information</h2>
      <p style={contactInfoStyle}>
        <strong>Location:</strong> Las Vegas, NV<br />
        <strong>Phone: </strong> 
        <a 
          href="tel:+17024657151" 
          style={hovered === 'phone' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('phone')}
          onMouseLeave={handleMouseLeave}
        >
          702-465-7151
        </a><br />
        <strong>Email: </strong> 
        <a 
          href="mailto:marijana.taseska@gmail.com" 
          style={hovered === 'email' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('email')}
          onMouseLeave={handleMouseLeave}
        >
          marijana.taseska@gmail.com
        </a>
      </p>
      <p style={contactInfoStyle}>
        <a 
          href="https://github.com/MarijanaTaseska" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={hovered === 'github' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={handleMouseLeave}
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/marijana-mirchevski" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={hovered === 'linkedin' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={handleMouseLeave}
        >
          LinkedIn
        </a>
      </p>
    </div>
    <div style={animated} className="animated-div">
    <p>Additional Information</p>
    </div>
    </div>
  );
};

export default InformationAboutMe;
