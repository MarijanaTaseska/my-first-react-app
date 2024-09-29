import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import colors from '../../images/colors.jpg'

const InformationAboutMe = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconBox = {
    textAlign: 'center',
    margin: '20px',
    border: '2px solid black',
    padding: isMobile ? '5%' : '2%', 
    paddingBottom: isMobile ? '30%' : '10%', 
    backgroundImage: `url(${colors})`,  // Use the imported image
    backgroundSize: 'cover',   // Optional, depending on your design
    backgroundPosition: 'bottom',
    width: isMobile ? '80%' : '100vw', 
    minHeight: isMobile ? '300px' : '500px',  // Ensure the container has a minimum height
  };
  const iconStyle = (icon) => ({
    margin: isMobile ? '5px' : '10px',  // Adjust margin for mobile
    fontSize: isMobile ? '2rem' : '3rem',
    color: hoveredIcon === icon ? '#ceec37' : '#272424ae', // Changes color on hover
    transition: 'transform 0.3s ease, color 0.3s ease',
    transform: hoveredIcon === icon ? 'scale(1.1)' : 'scale(1)', // Slightly enlarges on hover
    padding: isMobile ? '10px' : '20px',
    border: '2px solid #333',
    borderRadius: '50%',  // Makes it a circle
    width: isMobile ? '50px' : '70px',  // Smaller circle size for mobile
    height: isMobile ? '50px' : '70px',      // Circle size
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const iconContainerStyle = {
    display: 'flex', 
    justifyContent: 'space-between',  // Spreads out the icons
    marginTop: '20px',
    maxWidth: '80%',
    margin: '0 auto',
    gap: isMobile ? '15px' : '0', 
  };

  return (
    <div style={iconBox} id="contact">
      <h2 style={{fontSize:'3rem', paddingLeft:'8%',fontFamily: 'Poppins',textAlign:'start'}}>
        Get in Touch</h2>
      <div style={iconContainerStyle}>
      <a
          href="tel:+17024657151"
          style={iconStyle('phone')}
          onMouseEnter={() => setHoveredIcon('phone')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a
          href="mailto:marijana.taseska@gmail.com"
          style={iconStyle('email')}
          onMouseEnter={() => setHoveredIcon('email')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://github.com/MarijanaTaseska"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle('github')}
          onMouseEnter={() => setHoveredIcon('github')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/marijana-mirchevski"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle('linkedin')}
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default InformationAboutMe;
