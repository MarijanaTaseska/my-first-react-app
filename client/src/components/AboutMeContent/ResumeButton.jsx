import React from 'react';

const ResumeButton = ({ text, href, download }) => {
  const buttonStyle = {
    backgroundColor: '#eef3f3',
    color: 'black',
    padding: '20px 30px',
    textDecoration: 'none',
    borderRadius: '40px',
    border:'1px solid black',
    fontSize: '1.2rem',
    transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
    display: 'inline-block',
    cursor: 'pointer',
    margin:'10px',
  };

  const hoverStyle = {
    backgroundColor: '#d9ded9c2',
    boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.2)',
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
