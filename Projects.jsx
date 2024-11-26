import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "Oloba Construction Company",
      desc: "This a website about a construction company. It entails what they do and how to reach them if interested in having a structure constructed",
      liveLink: "https://ayoola-oloba.github.io/Oloba-Construction-Company/",
      githubLink: "https://github.com/Ayoola-Oloba/Oloba-Construction-Company",
      techs: ["HTML", "CSS", "JavaScript"],
      isOpenSource: true,
    },
    {
      name: "Rae's Luxury Hub",
      desc: "This is an online clothing vendor website. It consist of the different kind of clothing and different brands that Rae's Luxury Hub has to offer.",
      liveLink: "https://ayoola-oloba.github.io/Rae-s/",
      githubLink: "https://github.com/Ayoola-Oloba/Rae-s",
      techs: ["React"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
