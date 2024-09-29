import React, {useState, useEffect} from "react";
import landingPageImage from '../../images/project1.png';
import project2Image from '../../images/project2.png';

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  // Event listener to detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionStyle = {  
    textAlign: 'center',
    padding: isMobile ? '5%' : '3%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Stack on mobile
    margin: '20px',
    height: 'auto',
    justifyContent: isMobile ? 'center' : 'space-evenly',
  };
  
  const projectContainer = {
    width: isMobile ? '100%' : '45%', // Wider on mobile
    textAlign: 'center',
    padding: '10px',
    border: '1px solid gray',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: isMobile ? '20px' : '0', 
  };
  
  
  const imageStyle = {
    width: '100%',
    height: isMobile ? '250px' : '600px', // Smaller images on mobile
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    marginBottom: '20px',
  };

  const techStackStyle = {
    fontSize: isMobile ? '1rem' : '1.5rem', // Smaller text on mobile
    fontStyle: 'italic',
    color: '#555',
    height: 'auto',
  };


  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    fontSize: isMobile ? '1rem' : '1.5rem',
    padding: '1%',
  };

  const linkHoverStyle = {
    color: '#b2b9b2a5',
  };

  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (name) => {
    setHovered(name);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (<>
    <h2 style={{textAlign:'center', fontSize:'2.5rem', paddingTop:'3%'}}  id="projects">
    Take a look at some of my recent projects:</h2>
    <div style={sectionStyle}>
      
      {/* Project 1 */}
      <div style={projectContainer}>
        <div
          style={{
            ...imageStyle,
            backgroundImage: `url(${landingPageImage})`,
          }}
        ></div>
        <p style={techStackStyle}>Tech Stack: React, LESS, Node.js, Auth0, Axios</p>
        <a
          href="https://github.com/MarijanaTaseska/asylum-rg-fe-starter"
          target="_blank"
          rel="noopener noreferrer"
          style={hovered === 'project1' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('project1')}
          onMouseLeave={handleMouseLeave}
        >
          View on GitHub
        </a>
      </div>

      {/* Project 2 */}
      <div style={projectContainer}>
        <div
          style={{
            ...imageStyle,
            backgroundImage: `url(${project2Image})`,
          }}
        ></div>
        <p style={techStackStyle}>Tech Stack: React, Node.js, Jest, PostgreSQL</p>
        <a
          href="https://github.com/MarijanaTaseska/web-sprint-challenge-advanced-web-applications"
          target="_blank"
          rel="noopener noreferrer"
          style={hovered === 'project2' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
          onMouseEnter={() => handleMouseEnter('project2')}
          onMouseLeave={handleMouseLeave}
        >
          View on GitHub
        </a>
      </div>
    </div>
    </>
  );
};



export default ProjectSection;
