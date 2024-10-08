import React, {useEffect} from "react";
import ResumeComponent from "./AboutMeContent/ResumeComponent";
import AboutMe from "./AboutMeContent/AboutMe";
import ProjectSection from "./AboutMeContent/ProjectSection";
import Information from "./AboutMeContent/Information"
import AskMeAnything from "./AboutMeContent/AskMeAnythingAI";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import '../styles/Content.css'


const useInViewAnimation = (delay = 0) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, x: 0 });
      }
    }, [controls, inView]);
  
    return { ref, controls, delay };
  };

  const isMobile = window.innerWidth <= 480;

const Content = () => {
 const resumeAnimation = useInViewAnimation(0.2);
  const aboutMeAnimation = useInViewAnimation(0.4);
  const projectAnimation = useInViewAnimation(0.6);
  const informationAnimation = useInViewAnimation(1.0);
    return (
<div className="content">
<motion.div
        ref={resumeAnimation.ref}
        initial={{ opacity: 0, x: isMobile ? 0 : -300  }}  // Start off-screen to the left
        animate={resumeAnimation.controls}  // Use controls for in-view animation
        transition={{ duration: 1, delay: resumeAnimation.delay }}
        className="resume"
      >
<ResumeComponent />
</ motion.div>

<motion.div
        ref={aboutMeAnimation.ref}
        initial={{ opacity: 0, x: isMobile ? 0 : 300  }}  // Start off-screen to the right
        animate={aboutMeAnimation.controls}  // Use controls for in-view animation
        transition={{ duration: 1, delay: aboutMeAnimation.delay }}
        className="aboutMe"
      >
<AboutMe />
</motion.div>

<motion.div
        ref={projectAnimation.ref}
        initial={{ opacity: 0, y: isMobile ? 50 : 100 }}  // Start off-screen from below
        animate={projectAnimation.controls}  // Use controls for in-view animation
        transition={{ duration: 1, delay: projectAnimation.delay }}
        className="project"
      >
<ProjectSection />
</motion.div>

<AskMeAnything />

<motion.div
        ref={informationAnimation.ref}
        initial={{ opacity: 0, y: isMobile ? 50 : 100 }}  // Start off-screen from below
        animate={informationAnimation.controls}  // Use controls for in-view animation
        transition={{ duration: 1, delay: informationAnimation.delay }}
        className="information"
      >
<Information />
</motion.div>
</div>
    )
}

export default Content