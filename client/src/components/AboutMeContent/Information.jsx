import React from "react";

const InformationAboutMe = () => {
  const sectionStyle = {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#0b6265',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const contactInfoStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#0b6265',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const linkHoverStyle = {
    color: '#45a049',
  };

  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (name) => {
    setHovered(name);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Contact Information</h2>
      <p style={contactInfoStyle}>
        <strong>Location:</strong> Las Vegas, NV<br />
        <strong>Phone:</strong> 
        <a 
          href="tel:+17024657151" 
          style={hovered === 'phone' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('phone')}
          onMouseLeave={handleMouseLeave}
        >
          702-465-7151
        </a><br />
        <strong>Email:</strong> 
        <a 
          href="mailto:marijana.taseska@gmail.com" 
          style={hovered === 'email' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('email')}
          onMouseLeave={handleMouseLeave}
        >
          marijana.taseska@gmail.com
        </a>
      </p>

      <h3 style={titleStyle}>Social Links</h3>
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
  );
};

export default InformationAboutMe;
