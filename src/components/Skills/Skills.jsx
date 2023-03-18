import React from "react";
import "./Skills.css";
import cont from "./cont.jpeg";
import HomeSvg from "../Home/HomeSvg";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <h2>Skills</h2>

        <div className="skills-wrapper">
          <div className="skills-prog-cont">
            <h2 >Languages & Frameworks</h2>
            <div className="skills-prog-div">
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/html-5.png")} alt="" /> */}

                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-express-original colored skills-card-img"
                ></i>
                <p class="skills-card-name">Express.js</p>
              </div>

              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-react-original colored skills-card-img"
                ></i>
                <p class="skills-card-name">React.js</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-nodejs-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Node.js</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-javascript-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Javascript</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-css3-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Css</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-html5-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Html</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-mongodb-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Mongo Db</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/express-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-tailwindcss-original-wordmark colored skills-card-img"
                ></i>
                <p class="skills-card-name">Tailwind</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/git.png")} alt="" /> */}

                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-redux-original colored skills-card-img"
                ></i>
                <p class="skills-card-name">Redux</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-typescript-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Typescript</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-wrapper">
          <div className="skills-prog-cont">
            <h2>Technologies & Libraries</h2>
            <div className="skills-prog-div">
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/html-5.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-npm-original-wordmark colored skills-card-img"
                ></i>
                <p class="skills-card-name">Npm</p>
              </div>
              <div className="skills-card">
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-git-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Git</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/react-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-babel-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Babel</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/node-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-heroku-original colored skills-card-img"
                ></i>
                <p class="skills-card-name">Heroku</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-materialui-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Material UI</p>
              </div>
              <div className="skills-card">
                {/* <img className="skills-card-img" src={require("./icon/express-js.png")} alt="" /> */}
                <i
                  style={{ fontSize: "75px" }}
                  className="devicon-bootstrap-plain colored skills-card-img"
                ></i>
                <p class="skills-card-name">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="github-maindiv">


          <HomeSvg dir="down" />
          <div className="git-details">
            <h1>Github Details</h1>
          </div>

          <div className="git-stat-wrapper">
            <div className="git-star-cont">
              <div className="git-state-div">
                <div></div>
                <div>
                  <div></div>
                  {/* <img id="github-streak-stats" src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shagunsharma6677&theme=github_dark" alt="jainex's GitHub stats" /> */}
                  <div className="stat-divs">
                    <img
                      id="github-top-langs"
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=shagunsharma6677"
                      alt="random"
                    />
                  
                    <img
                    class="react-activity-calendar"
                      src="https://github-readme-stats.vercel.app/api?username=anuraghazra&theme=gotham"
                      alt=""
                    />
                
                  </div>
                  <div className="stat-card-skills">
                  <img
                     id="github-streak-stats" 
                      src="https://github-readme-streak-stats.herokuapp.com?user=shagunsharma6677"
                      alt=""
                    />
                    <img
                      id="github-stats-card"
                      src="https://github-readme-stats.vercel.app/api?username=shagunsharma6677"
                      alt="GitHub Commits Graph"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <HomeSvg dir="up" />
        </div>
      </div>
    </>
  );
};

export default Skills;
