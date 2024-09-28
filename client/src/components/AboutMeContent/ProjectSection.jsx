import React from "react";
import landingPageImage from '../../images/project1.png';
import project2Image from '../../images/project2.png';

const ProjectSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding:'3%',
    display:'flex',
    margin:'40px',
    height:'50vh',
    justifyContent: 'space-evenly',
  };
  
  const projectContainer = {
    width: '45%',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid gray',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  
  const imageStyle = {
    width: '100%',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    marginBottom: '20px',
  };

  const techStackStyle = {
    fontSize:'1.5rem',
    fontStyle: 'italic',
    color: '#555',
    height:'5px'
  };


  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    fontSize:'1.5rem',
    padding:'1%',
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
    <h2 style={{textAlign:'center', fontSize:'2.5rem', paddingTop:'3%'}}>
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
