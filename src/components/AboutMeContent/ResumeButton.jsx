import React from 'react';

const ResumeButton = ({ text, href, download }) => {
  const buttonStyle = {
    backgroundColor: '#0b6265',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const hoverStyle = {
    backgroundColor: '#45a049',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}  // Apply hover styles if hovered
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target={download ? '_self' : '_blank'}
      rel={download ? '' : 'noopener noreferrer'}
      download={download ? true : false}
    >
      {text}
    </a>
  );
};

export default ResumeButton;
