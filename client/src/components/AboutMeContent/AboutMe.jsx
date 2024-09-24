// I am a dedicated Full Stack Web Developer with expertise in front-end and back-end technologies, including React.js, Node.js, and RESTful API integration. I specialize in creating responsive and dynamic web applications that focus on user experience and efficient functionality. With experience in managing both client-side and server-side development, I thrive in fast-paced environments and enjoy problem-solving. My portfolio highlights projects like Human Rights First: Asylum Report Generator, showcasing my skills in authentication, dynamic data integration, and testing.
//// //Marijana Mirchevski
// Full Stack Web Developer
// Las Vegas, NV | 702-465-7151 | marijana.taseska@gmail.com | GitHub | LinkedIn

// As a Full Stack Web Developer, I specialize in building dynamic, responsive web applications with a focus on both front-end and back-end development. I have hands-on experience using React.js, Redux, Node.js, and RESTful APIs, and have successfully integrated authentication systems, live data from APIs, and testing frameworks into complex projects.

// I’ve worked on projects such as Human Rights First: Asylum Report Generator, where I developed a responsive landing page, integrated live API data for dynamic visualizations, and implemented secure authentication with Auth0. Additionally, I have experience developing custom Express middleware to handle data validation and logging in server-side applications.

// I’m passionate about creating efficient, user-friendly web solutions, and I bring both a problem-solving mindset and strong attention to detail to every project.
import React from "react";

const AboutMe = () => {
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

  const headingStyle = {
    fontSize: '1.8rem',
    color: '#0b6265',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>About Meeeeeeee</h2>
      <p style={paragraphStyle}>
        Hi, I’m Marijana Mirchevski, a passionate Full Stack Web Developer based in Las Vegas. I love creating web applications that are both functional and aesthetically pleasing, with a particular focus on front-end development. My journey in tech started with a deep curiosity for solving problems, which led me to explore various programming languages and frameworks.
      </p>

      <h3 style={headingStyle}>Education</h3>
      <p style={paragraphStyle}>
        I hold a Bachelor of Business Administration from South East European University (SEEU), and I am a graduate of the Full Stack Web Development program at Bloom Institute of Technology (BloomTech). This program gave me a strong foundation in full-stack development, with a focus on modern web technologies like React, Node.js, and database management.
      </p>

      <h3 style={headingStyle}>Certifications</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Full Stack Web Development - BloomTech (2024)</li>
        <li style={listItemStyle}>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
        <li style={listItemStyle}>React & Redux Certification - Codecademy</li>
      </ul>

      <h3 style={headingStyle}>Technical Skills</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Front-End: React.js, Redux, HTML, CSS, JavaScript (ES6+)</li>
        <li style={listItemStyle}>Back-End: Node.js, Express, PostgreSQL, REST APIs</li>
        <li style={listItemStyle}>Tools: Git, GitHub, VS Code, Heroku, Vercel</li>
        <li style={listItemStyle}>Testing: Jest, React Testing Library, Postman</li>
      </ul>

      <h3 style={headingStyle}>Personal Interests</h3>
      <p style={paragraphStyle}>
        When I'm not coding, I enjoy exploring advancements in AI, UX/UI design, and contributing to open-source projects. I am always eager to learn new technologies and am currently fascinated by the latest trends in web development and AI-powered tools.
      </p>
    </div>
  );
};

export default AboutMe;
