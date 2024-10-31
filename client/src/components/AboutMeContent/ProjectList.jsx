import { useState } from "react";
import React from "react";

const projects = [
    {
      name: '* Authentication and Testing Sprint Challenge',
      link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-authentication-and-testing',
    },
    {
      name: '* Adding Data Persistence Sprint Challenge',
      link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-adding-data-persistence',
    },
    {
      name: '* Build a Web API',
      link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-build-a-web-api',
    },
    {
        name: '* Advanced State Management in React',
        link: 'https://github.com/MarijanaTaseska/W_S10_Challenge',
      },
      {
        name: '* React Router, Forms in React, Form Validation, Testing',
        link: 'https://github.com/MarijanaTaseska/web-sprint-challenge-advanced-react',
      },
      {
        name: '* Advanced React Sprint Challenge',
        link: 'https://github.com/MarijanaTaseska/web-s7-challenge-MarijanaTaseska',
      },
      {
        name: '* Manipulating the DOM and building a section using vanilla JavaScript',
        link: 'https://github.com/MarijanaTaseska/sprint-5-challenge-MarijanaTaseska',
      },
    // Add more projects here
  ];

const ProjectList = () => {
    // const linkStyle = {
    //     color: 'blue',
    //     textDecoration: 'none',
    //     fontSize: '1.5rem',
    //     fontWeight: 'bold',
    //     transition: 'color 0.3s ease, transform 3s ease', // Add smooth hover transitions
    //     margin: '10px 0',
    //     display: 'inline-block',
    //   };
    const linkStyle = {
      color: '#3498db',  // A more vibrant color
      textDecoration: 'none',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      margin: '10px 0',
      display: 'inline-block',
      padding: '5px 10px',
      borderRadius: '8px',
      boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.3)',
    };
    
    const linkHoverStyle = {
      color: '#2980b9',  // Darken the color slightly on hover
      transform: 'scale(1.05)',  // Slight zoom effect
      boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.3)',  // Add a glow/shadow effect on hover
    };
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{textAlign:'start', marginTop:'20px',padding:''}}>
            <ul style={{listStyleType:'none', padding:0}}> 
                {projects.map((project,index) => (
                <li key = {index} style={{marginBottom:'10px'}}>
                    <a 
                    href={project.link} 
                    target="blank" 
                    rel="noopener noreferrer"
                    style={{...linkStyle, ...(isHovered ? linkHoverStyle : {}) }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
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