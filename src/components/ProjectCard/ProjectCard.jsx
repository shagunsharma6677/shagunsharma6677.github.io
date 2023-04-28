import React from "react";
import "./ProjectCard.css";
import {Button}from "../Button/Button.jsx";

const ProjectCard = ({ img, head, des, stack, git, deploy }) => {
  return (
    <>
      <div className="project-wrapper project-card">
        <div className="proj-cont">
          <div className="proj-left">
            <div className="proj-img-cont">
              <img src={img} width={"200px"} alt="" />
            </div>
          </div>
          <div className="proj-right">
            <div className="proj-right-cont">
              <h3>Featured Project</h3>
              <h1 className="project-title">{head}</h1>

              <div className="proj-des project-description">
                <p>{des}</p>
              </div>
              <div className="project-tech-stack">
                {stack?.map((item) => {
                  return <i style={{ fontSize: "60px" }} className={item}></i>
                })}
              </div>

              <div className="deploy-links">
                <div className="project-deployed-link">
                  <a href={deploy} rel="noopener noreferrer"  target="_blank">
                    <Button bg={false} title="Deploy Link" />
                  </a>
                </div>
                <div className="project-github-link">
                  <a href={git} rel="noopener noreferrer"  target="_blank">
                    <Button bg={false} title="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
