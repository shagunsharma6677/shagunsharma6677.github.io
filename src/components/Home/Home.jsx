import React from "react";
import "./Home.css";
import {Button as ButtonNew} from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import Typewriter from "typewriter-effect";
import img from "./picone2.png";
import { Link } from "react-scroll";
import { Button } from "@chakra-ui/react"
import resume from "./Shagun-Sharma-Resume.pdf";

import { Link as NavLink } from "@chakra-ui/react";
// https://drive.google.com/uc?export=download&id=1ZIGGq4BHxfpwr4wyQPB6QzfPtyfx22So
const Home = () => {
  const redirect = () => {
    window.open(
      "https://drive.google.com/file/d/1ZIGGq4BHxfpwr4wyQPB6QzfPtyfx22So/view?usp=share_link",
      "_blank", "noreferrer"
    );
  };


  return (
    <div id="home" className="home-wrapper">
      <Sidebar />
      <button id="resume-button-2"></button>
      <div className="h-wrap-cont">
        <div className="home-left">
          <div className="h-left-wrapper">
            <div className="h-title-head">
              <span style={{ color: "white" }}>Hi There</span>
              <br />

              <span>
                I am <span id="user-detail-name">Shagun</span>{" "}
              </span>
              <div className="typewriter">
                <Typewriter
                  options={{
                    strings: [
                      "A Full Stack Web Developer",
                      "A Traveller",
                      "A MERN Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </div>
            <div id="user-detail-intro" className="h-title-down">
              <p>
                Hello, and welcome to my portfolio! My name is Shagun Sharma,
                and I am a full-stack developer with a strong foundation &
                passion for working with cutting-edge web development
                technologies.
              </p>
              <div className="home-buttons">
                <div className="nav-right ">
                  <Button
                    className="our-button glow"
                    style={{ backgroundColor: "#222222", cursor: "pointer" }}
                    id="resume-button-2"
                    onClick={redirect}
                  >
                    <NavLink href={resume} download id="resume-link-2" className="nav-link resume" >

                      Resume

                    </NavLink>
                  </Button>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link
                    className="nav-link glow touch"
                    to="touch"
                    smooth={true}
                    duration={500}
                    offset={200}
                  >
                    <ButtonNew bg={false} title="Contact Me" />
                  </Link>
                </div>
              </div>
              {/* <div className="h-scroller">Scroll-Down</div> */}
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="h-right-wrapper">
            <img

              className="profile-pic home-img"
              src="https://mspronesti.github.io/static/media/home.11d38661c5585fd9fd2858c3e4b20709.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
