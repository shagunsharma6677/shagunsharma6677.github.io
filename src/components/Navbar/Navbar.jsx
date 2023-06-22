import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import resume from "./Shagun-Sharma-Resume.pdf";
import { Link as NavLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const redirect = () => {
    window.open(
      "https://drive.google.com/file/d/1ZIGGq4BHxfpwr4wyQPB6QzfPtyfx22So/view?usp=share_link",
      "_blank",
      "noreferrer"
    );
  };
  const [state, setState] = useState(false);
  return (
    <>
      <div id="nav-menu" className="nav-wrapper glow">
        <div className="nav-flex">
          <ul className="nav-left">
            <Link
              className="nav-link home "
              to="home"
              style={{ fontFamily: "BestermindRegular", fontSize: "30px" }}
              smooth={true}
              duration={500}
              offset={0}
            >
              Shagun{" "}
              <span
                className="surname"
                style={{ fontFamily: "BestermindRegular", fontSize: "30px" }}
              >
                Sharma
              </span>
            </Link>
          </ul>
          <ul className={state === true ? "nav-center" : "nav-center active"}>
            <li>
              <Link
                className="nav-link nav-tab glow greenGlow home"
                to="home"
                smooth={true}
                duration={500}
                offset={0}
                onClick={() => setState(!state)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link nav-tab greenGlow glow about"
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setState(!state)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link nav-tab greenGlow glow skills"
                to="skills"
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setState(!state)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="nav-link nav-tab greenGlow glow projects"
                to="projects"
                smooth={true}
                duration={500}
                offset={-20}
                onClick={() => setState(!state)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="nav-link nav-tab greenGlow glow contact"
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setState(!state)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-right nav-link resume">
            <Button
              className="our-button glow"
              style={{ backgroundColor: "#222222", cursor: "pointer" }}
              id="resume-button-1"
              onClick={redirect}
            >
              <NavLink
                href={resume}
                download
                id="resume-link-1"
                className="nav-link resume"
              >
                Resume
              </NavLink>
            </Button>
          </div>

          {/* <div className="nav-right ">
            <button
              className="our-button"
              style={{ backgroundColor: "#222222", cursor: "pointer" }}
              id="resume-button-1"
              onClick={redirect}
            >
              <a
                id="resume-link-1"
                className="nav-link resume"
                style={{ color: "white", cursor: "pointer" }}
                href="https://drive.google.com/uc?export=download&id=1ZIGGq4BHxfpwr4wyQPB6QzfPtyfx22So"
                download={resume}
                rel="noopener noreferrer"
              >
                CV Dowmload
              </a>
            </button>
          </div> */}
          <div onClick={() => setState(!state)} className="hamb">
            {state === true ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
