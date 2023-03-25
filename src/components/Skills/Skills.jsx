import React from "react";
import "./Skills.css";
// import cont from "./cont.jpeg";
import HomeSvg from "../Home/HomeSvg";
import cal from "./calender.jpeg"
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <>
      <div id="skills">
        <Fade left>
          <h2>Skills</h2>
        </Fade>

        <div className="skills-wrapper">
          <Fade left>
            <div className="skills-prog-cont">
              <h2 >Languages & Frameworks</h2>
              <div className="skills-prog-div">
                <div className="skills-card">


                  {/* <img className="skills-card-img" src={require("./icon/html-5.png")} alt="" /> */}

                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-express-original colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Express.js</p>

                </div>

                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-react-original colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">React.js</p>
                </div>
                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-nodejs-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Node.js</p>
                </div>
                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-javascript-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Javascript</p>
                </div>
                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-css3-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Css</p>
                </div>
                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-html5-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Html</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/js.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-mongodb-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Mongo Db</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/express-js.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-tailwindcss-original-wordmark colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Tailwind</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/git.png")} alt="" /> */}

                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-redux-original colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Redux</p>
                </div>
                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-typescript-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Typescript</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="skills-wrapper">
          <Fade right>
            <div className="skills-prog-cont">
              <h2>Technologies & Libraries</h2>
              <div className="skills-prog-div">
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/html-5.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-npm-original-wordmark colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Npm</p>
                </div>
                <div className="skills-card">
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-git-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Git</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/react-js.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-babel-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Babel</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/node-js.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-heroku-original colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Heroku</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/js.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-materialui-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Material UI</p>
                </div>
                <div className="skills-card">
                  {/* <img className="skills-card-img" src={require("./icon/express-js.png")} alt="" /> */}
                  <i
                    style={{ fontSize: "55px" }}
                    className="devicon-bootstrap-plain colored skills-card-img"
                  ></i>
                  <p class="skills-card-name">Bootstrap</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="github-maindiv">


          <HomeSvg dir="down" />
          <div className="git-details">
            <Fade bottom>
              <h1>Github Details</h1>
            </Fade>
          </div>

          <div className="git-stat-wrapper">
            <div className="git-star-cont">
              <div className="git-state-div">
                <div></div>
                <div>

                  {/* <img id="github-streak-stats" src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shagunsharma6677&theme=github_dark" alt="jainex's GitHub stats" /> */}
                  <div className="stat-divs stat-card-skills react-activity-calendar">
                    <Fade bottom>
                      <img src={cal} alt="" />
                    </Fade>
                    <div className="stat-img-div">
                      {/* <img
                        id="github-top-langs"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=shagunsharma6677&theme=gotham"
                        alt="random"
                      /> */}
                      <Fade>
                        <img
                          id="github-streak-stats"
                          src="https://github-readme-streak-stats.herokuapp.com?user=shagunsharma6677&theme=gotham"
                          alt=""
                        />
                      </Fade>
                      <Fade right>
                        <img
                          class="react-activity-calendar"
                          src="https://github-readme-stats.vercel.app/api?username=shagunsharma6677&theme=gotham"
                          alt=""
                        />
                      </Fade>

                    </div>
                    <div className="stat-img-div">

                      {/* <img
                        id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=shagunsharma6677&theme=gotham"
                        alt="GitHub Commits Graph"
                      /> */}
                      {/* <img
                        id="github-top-langs"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=shagunsharma6677&theme=gotham"
                        alt="random"
                      />  */}

                    </div>



                  </div>
                </div>

              </div>
            </div>
          </div>
          <HomeSvg dir="up" />
        </div>
      </div >
    </>
  );
};

export default Skills;
