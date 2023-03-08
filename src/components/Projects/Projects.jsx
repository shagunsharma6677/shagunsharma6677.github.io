import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="project-card" id="projects">
      <h1>Projects</h1>
      <div className="proj-card-wrapper">
        <div>
          <ProjectCard />
        </div>
        <div>
          <ProjectCard />
        </div>
        <div>
          <ProjectCard />
        </div>
        <div>
          <ProjectCard />
        </div>

      </div>

      {/* <div class="project-card">
            <img src="" alt="" />
            <div class="project-title">project-title</div>
            <div class="project-description">project-description</div>
            <div class="project-tech-stack">project-tech-stack</div>
            <div class="project-github-link">project-github-link</div>
            <div class="project-deployed-link">project-deployed-link</div>
            
        </div>

        
        <div class="project-card">
            <img src="" alt="" />
            <div class="project-title">project-title</div>
            <div class="project-description">project-description</div>
            <div class="project-tech-stack">project-tech-stack</div>
            <div class="project-github-link">project-github-link</div>
            <div class="project-deployed-link">project-deployed-link</div>
            
        </div>

        
        <div class="project-card">
            <img src="" alt="" />
            <div class="project-title">project-title</div>
            <div class="project-description">project-description</div>
            <div class="project-tech-stack">project-tech-stack</div>
            <div class="project-github-link">project-github-link</div>
            <div class="project-deployed-link">project-deployed-link</div>
            
        </div>

        <div class="project-card">
            <img src="" alt="" />
            <div class="project-title">project-title</div>
            <div class="project-description">project-description</div>
            <div class="project-tech-stack">project-tech-stack</div>
            <div class="project-github-link">project-github-link</div>
            <div class="project-deployed-link">project-deployed-link</div>
            
        </div> */}
    </div>
  );
};

export default Projects;
