import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div
      className=".project-card"
      style={{ backgroundColor: "#222222", paddingTop: "100px" }}
      id="projects"
    >
      <h1 style={{ color: "#68D372", fontSize: "60px", textAlign: "center" }}>
        Projects
      </h1>

      <ProjectCard />
      <br />

      <ProjectCard />
      <br />

      <ProjectCard />
      <br />
      <ProjectCard />
      <br />

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
