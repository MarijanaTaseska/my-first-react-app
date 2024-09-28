import React from "react";

const ProjectSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
  };

  const projectStyle = {
    marginBottom: '30px',
  };

  const projectTitleStyle = {
    fontSize: '1.8rem',
  };

  const projectDescriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  const techStackStyle = {
    fontStyle: 'italic',
    color: '#555',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
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

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>My Projects</h2>

      {/* Project 1 */}
      <div style={projectStyle}>
        <h3 style={projectTitleStyle}>Human Rights First: Asylum Report Generator</h3>
        <p style={projectDescriptionStyle}>
          Developed a responsive landing page using React and LESS, integrated live API data for dynamic visualizations, and implemented secure authentication with Auth0.
        </p>
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
      <div style={projectStyle}>
        <h3 style={projectTitleStyle}>Advanced Web Applications</h3>
        <p style={projectDescriptionStyle}>
          Created a full-stack application with secure login, data management, and comprehensive testing using Jest.
        </p>
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

      {/* Add more projects as needed */}
    </div>
  );
};

export default ProjectSection;
