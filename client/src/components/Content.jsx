import React from "react";
import '../styles/Content.css';
import ResumeComponent from "./AboutMeContent/ResumeComponent";
import AboutMe from "./AboutMeContent/AboutMe";
import ProjectSection from "./AboutMeContent/ProjectSection";
import Information from "./AboutMeContent/Information"
import AskMeAnything from "./AboutMeContent/AskMeAnythingAI";
import {motion} from 'framer-motion'
const Content = () => {

    return (
<div className="content">
<motion.div
           initial={{ opacity: 0, x: -300 }}  // Start off-screen to the left (-300px)
           animate={{ opacity: 1, x: 0 }}     // Move to original position (0px) and fade in
           transition={{ duration: 1, delay: 0.5 }}   // Animation lasts 1.5 seconds
      >
<ResumeComponent />
</ motion.div>
<AboutMe />
<ProjectSection />
<AskMeAnything />
<Information />
</div>
    )
}

export default Content