import React from "react";

const projects = [
    {
      name: 'Project 1: Authentication and Testing Sprint Challenge',
      link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-authentication-and-testing',
    },
    {
      name: 'Project 2: Adding Data Persistence Sprint Challenge',
      link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-adding-data-persistence',
    },
    {
      name: 'Project 3: Build a Web API',
      link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-build-a-web-api',
    },
    {
        name: 'Project 4: Advanced State Management in React',
        link: 'https://github.com/MarijanaTaseska/W_S10_Challenge',
      },
      {
        name: 'Project 5: React Router, Forms in React, Form Validation, Testing',
        link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-advanced-react',
      },
      {
        name: 'Project 6: Advanced React Sprint Challenge',
        link: 'https://github.com/MarijanaTaseska/web-s7-challenge-MarijanaTaseska',
      },
      {
        name: 'Project 7: Manipulating the DOM and building a section using vanilla JavaScript',
        link: 'https://github.com/MarijanaTaseska/sprint-5-challenge-MarijanaTaseska',
      },
    // Add more projects here
  ];

const ProjectList = () => {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        transition: 'color 0.3s ease, transform 0.2s ease', // Add smooth hover transitions
        margin: '10px 0',
        display: 'inline-block',
      };
    
      
    return (
        <div style={{textAlign:'start', marginTop:'20px',padding:''}}>
            <ul style={{listStyleType:'none', padding:0}}> 
                {projects.map((project,index) => (
                <li key = {index} style={{marginBottom:'10px'}}>
                    <a 
                    href={project.link} 
                    target="blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                    >
                        {project.name}
                    </a>
                </li>
                )) }
            </ul>
        </div>
    )
}

export default ProjectList;