import React from "react";
import projects from "../project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

import usePageTitle from "../usePageTitle";
import TechStackChart from "./TechStackChart";

const Projects = () => {
  usePageTitle();

  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>

      {/* Grid + Chart Layuot */}
      <div className="projects-chart-layout">
        {/* LEFT: Grid of Projects cards */}
        <div className="projects-left">
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-box">
                <img
                  src={`/images/projects/${project.projectImage}.webp`}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tech">{project.techStack}</p>
                  <div className="project-links">
                    <div className="tooltip" data-tooltip="Live Site">
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                    <div className="tooltip" data-tooltip="GitHub Code">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                </div>
            ))}
            </div>
          </div>
        {/* RIGHT: Tech Stack Chart */}
        <div className="projects-right">
          <TechStackChart />
        </div>
      </div>
    </section>
  );
};

export default Projects;
