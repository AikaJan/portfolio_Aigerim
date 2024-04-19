import React from "react";
import Project from "../components/project/Project";

import { projects } from "./../helpers/projectList";
import SelfProject from "./SelfProject";

const Projects = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((i, index) => {
              return (
                <Project
                  key={index}
                  title={i.title}
                  img={i.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;

// <li className="project">
// <a href="./project-page.html">
//   <img
//     src={project02}
//     alt="Project img"
//     className="project__img"
//   />
//   <h3 className="project__title">Video service</h3>
// </a>
// </li>
// <li className="project">
// <a href="./project-page.html">
//   <img
//     src={project03}
//     alt="Project img"
//     className="project__img"
//   />
//   <h3 className="project__title">Video portal</h3>
// </a>
// </li>

// <li className="project">
// <img src={project04} alt="Project img" className="project__img" />
// <h3 className="project__title">Dating app</h3>
// </li>
// <li className="project">
// <img src={project05} alt="Project img" className="project__img" />
// <h3 className="project__title">Landing</h3>
// </li>
// <li className="project">
// <img src={project06} alt="Project img" className="project__img" />
// <h3 className="project__title">Gaming community</h3>
// </li>
