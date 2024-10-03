import React from "react";

import "./Projects.css";
import usePageTitle from "../usePageTitle";

const Projects = ({ projectData }) => {
  usePageTitle();
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="head-bottom"></div>
      <div className="container">
        {projectData.map((project) => (
          <section className="card" key={project.id}>
            <img
              src={`images/projects/${project.projectImage}.webp`}
              alt={project.title}
              className="card-img"
              loading="lazy"
            />
            <p className="card-title">{project.title}</p>

            <div className="tech-stack">
              <p className="tech-head underline">Tech Stack :</p>
              <ul className="tech-list">
                {
                  Array.isArray(project.techStack)
                  ? project.techStack.map((tech, id) => <li key={id}>{tech}</li>)
                  : project.techStack.split(", ").map((tech, id) => <li key={id}>{tech}</li>)
                }
              </ul>
            </div>

            <div className="card-btn">
              <button
                className="btn"
                onClick={() => handleClick(project.siteLink)}
                aria-label={`View ${project.title} website`}
              >
                Website
              </button>
              <button
                className="btn"
                onClick={() => handleClick(project.githubLink)}
                aria-label={`View ${project.title} source code`}
              >
                Source Code
              </button>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Projects;
