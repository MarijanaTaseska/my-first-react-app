import React from "react";
import '../styles/Content.css';
import ResumeComponent from "./AboutMeContent/ResumeComponent";
import AboutMe from "./AboutMeContent/AboutMe";
import ProjectSection from "./AboutMeContent/ProjectSection";
import Information from "./AboutMeContent/Information"
import AskMeAnything from "./AboutMeContent/AskMeAnythingAI";
const Content = () => {

    return (
<div>
<ResumeComponent />
<AboutMe />
<ProjectSection />
<Information />
<AskMeAnything />
</div>
    )
}

export default Content