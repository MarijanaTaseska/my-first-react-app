import React from "react";
const AboutMe = () => {
  const sectionStyle = {
    textAlign: 'center',
    // backgroundColor: '#f9f9f9',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
    padding:'5%',
    margin:'50px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    border:'2px solid gray',
    borderRadius:'50px',
    padding:'3%',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    // border:'2px solid gray',
  };

  const listStyle = {
    listStyleType:'circle',
    lineHeight:'2rem',
    paddingLeft: '0',
    // border:'2px solid gray',
    textAlign:'left',
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>The Person Behind the Projects</h2>
      <div style={paragraphStyle} className="about-me" >
      <p>
        Hi, I’m Marijana Mirchevski, a passionate Full Stack Web Developer based in Las Vegas. I love creating web applications that are both functional and aesthetically pleasing, with a particular focus on front-end development. My journey in tech started with a deep curiosity for solving problems, which led me to explore various programming languages and frameworks.
      </p>
      <p>
        I hold a Bachelor of Business Administration from South East European University (SEEU), and I am a graduate of the Full Stack Web Development program at Bloom Institute of Technology (BloomTech). This program gave me a strong foundation in full-stack development, with a focus on modern web technologies like React, Node.js, and database management.
      </p>
      <p>
        When I'm not coding, I enjoy exploring advancements in AI, UX/UI design, and contributing to open-source projects. I am always eager to learn new technologies and am currently fascinated by the latest trends in web development and AI-powered tools.
      </p>
      </div>

      <div  style={headingStyle} className="certifications">
      <h3 style={{textAlign:'left'}}>Certifications</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Full Stack Web Development - BloomTech (2024)</li>
        <li style={listItemStyle}>Bachelor of Business Administration - South East European University (2010)</li>
      </ul>
      </div>

      <div style={headingStyle} className="technical-skills">
      <h3 style={{textAlign:'left'}}>Technical Skills:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Front-End: React.js, Redux, HTML, CSS, JavaScript (ES6+)</li>
        <li style={listItemStyle}>Back-End: Node.js, Express, PostgreSQL, REST APIs</li>
        <li style={listItemStyle}>Tools: Git, GitHub, VS Code, Heroku, Vercel</li>
        <li style={listItemStyle}>Testing: Jest, React Testing Library, Postman</li>
      </ul>
      </div>
    </div>
  );
};

export default AboutMe;
