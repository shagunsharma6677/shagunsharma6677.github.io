import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
// import resume from "./Download/Shagun-Sharma-Resume.pdf";

const Navbar = () => {
  const redirect = () => {
    window.open(
      "https://drive.google.com/file/d/1ZIGGq4BHxfpwr4wyQPB6QzfPtyfx22So/view?usp=share_link",
      "_blank",


    );
  };
  const [state, setState] = useState(false);
  return (
    <>
      <div id="nav-menu" className="nav-wrapper">
        <div className="nav-flex">
          <ul className="nav-left">
            <svg
              id="logo-15"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
            </svg>
          </ul>
          <ul className={state === true ? "nav-center" : "nav-center active"}>
            <li>
              <Link
                className="nav-link home"
                to="home"
                smooth={true}
                duration={500}
                offset={0}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link about"
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link skills"
                to="skills"
                smooth={true}
                duration={500}
                offset={-60}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="nav-link projects"
                to="projects"
                smooth={true}
                duration={500}
                offset={-20}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="nav-link contact"
                to="contact"
                smooth={true}
                duration={500}
                offset={0}
              >
                Contact
              </Link>
            </li>
            <li onClick={redirect} class="nav__item" id="resume-button-1" className="nav__link" >
              <a href="/Shagun-Sharma-Resume.pdf" id="resume-link-1" class="nav-link resume"
                download="Shagun-Sharma-Resume">
                Resume
              </a>
            </li>
          </ul>

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
                href="https://drive.google.com/file/d/1ZIGGq4BHxfpwr4wyQPB6QzfPtyfx22So/view?usp=share_link"
                target="_blank"
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
